import axios from 'axios';
import { UNAUTHORIZED, API_BASE_URL } from '../../../constants';
import { camelizationResponse, TokenStorage } from '../../../utils';

export class Api {
  static pagination(page = '', per = '') {
    return `filters[page]=${page}&filters[per]=${per}`;
  }

  static search(search = '') {
    return `filters[search]=${search}`;
  }

  static orderBy(orderAsc = '', orderDesc = '') {
    return `filters[order_asc]=${orderAsc}&filters[order_desc]=${orderDesc}`;
  }

  static inactivePatients(inactive) {
    return inactive ? `inactive=${inactive}` : '';
  }

  addTokenToRequest(data, headers) {
    const bearerToken = this.tokenStorage.getToken(this.tokenKey);

    if (bearerToken) {
      /* eslint-disable-next-line no-param-reassign */
      headers.authorization = bearerToken;
    }

    return JSON.stringify(data);
  }

  saveTokenFromResponse(data, headers) {
    if (headers.authorization) {
      this.tokenStorage.setToken(headers.authorization);
    }

    return typeof data === 'string' && data.length ? JSON.parse(data) : data;
  }

  constructor(HTTPdriver, tokenStorage, tokenKey, locationServise) {
    this.location = locationServise || window.location;
    this.tokenKey = tokenKey;
    this.tokenStorage = tokenStorage;
    this.request = HTTPdriver.create({
      baseURL: `${API_BASE_URL}/api/v1`,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      transformRequest: [
        this.addTokenToRequest.bind(this),
      ],
      transformResponse: [
        this.saveTokenFromResponse.bind(this),
      ],
    });

    this.request.interceptors.response.use(
      (response) => {
        response.data = camelizationResponse(response.data);
        return response;
      },
      (error) => {
        if (error.response.status === UNAUTHORIZED) {
          this.tokenStorage.removeToken();
        }

        return Promise.reject(error.response);
      },
    );
  }

  physicianLogin(params) {
    this.tokenStorage.removeToken();
    return this.request
      .post('/physicians/sign_in', params);
  }

  physicianLogout() {
    return this.request
      .delete('/physicians/sign_out')
      .then(() => this.tokenStorage.removeToken());
  }

  patientList({
    page,
    per,
    search: str,
    orderAsc,
    orderDesc,
    inactive,
  }) {
    const {
      pagination,
      search,
      orderBy,
      inactivePatients,
    } = Api;
    return this.request
      .get(`/physician/patients?${inactivePatients(inactive)}&${pagination(page, per)}&${search(str)}&${orderBy(orderAsc, orderDesc)}`);
  }

  patientProfile(id) {
    return this.request
      .get(`/physician/patients/${id}`);
  }

  patientTreatments(id) {
    return this.request
      .get(`/physician/patients/${id}/treatments`);
  }

  patientBiomarkers(id) {
    return this.request
      .get(`/physician/patients/${id}/biomarker_results`);
  }

  requestBiomarkersPermission(id) {
    return this.request
      .post(`/physician/patients/${id}/permission_request?permission_request[kind]=biomarker_results`);
  }

  requestQoLPermission(id) {
    return this.request
      .post(`/physician/patients/${id}/permission_request?permission_request[kind]=qol`);
  }
}

const tokenKey = 'physicianToken';
const tokenStorage = new TokenStorage(localStorage, tokenKey);

export default new Api(axios, tokenStorage, tokenKey);
