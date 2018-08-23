import axios from 'axios';
import { UNAUTHORIZED, API_BASE_URL } from '../../../constants';
import { LOGIN_ROUTE } from '../constants';
import { TokenStorage } from '../../../utils';

export class Api {
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

    return JSON.parse(data);
  }

  constructor(HTTPdriver, tokenStorage, tokenKey, locationServise) {
    this.location = locationServise || window.location;
    this.tokenKey = tokenKey;
    this.tokenStorage = tokenStorage;
    this.request = HTTPdriver.create({
      baseURL: API_BASE_URL,
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
      response => response,
      (error) => {
        if (error.response.status === UNAUTHORIZED) {
          this.tokenStorage.removeToken();
          this.location.replace(LOGIN_ROUTE);
        }

        return Promise.reject(error);
      },
    );
  }

  physicianLogin(params) {
    this.tokenStorage.removeToken();
    return this.request
      .post('/api/v1/physicians/sign_in', params);
  }

  physicianLogout() {
    return this.request
      .delete('/api/v1/physicians/sign_out')
      .finally(() => this.tokenStorage.removeToken());
  }

  patientList(params) {
    return this.request
      .get('/api/v1/physician/patients', params);
  }

  patientProfile(id) {
    return this.request
      .get(`/api/v1/physician/patients/${id}`);
  }

  patientTreatments(id) {
    return this.request
      .get(`/api/v1/physician/patients/${id}/treatments`);
  }

  patientBiomarkers(id) {
    return this.request
      .get(`/api/v1/physician/patients/${id}/biomarker_results`);
  }
}

const tokenKey = 'physicianToken';
const tokenStorage = new TokenStorage(localStorage, tokenKey);

export default new Api(axios, tokenStorage, tokenKey);
