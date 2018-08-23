import axios from 'axios';

class Api {
  static storage = localStorage;

  static addTokenToRequest(data, headers) {
    const bearerToken = this.storage.getItem('bearerToken');

    if (bearerToken) {
      /* eslint-disable-next-line no-param-reassign */
      headers.authorization = bearerToken;
    }

    return JSON.stringify(data);
  }

  static saveTokenFromResponse(data, headers) {
    if (headers.authorization) {
      this.storage.setItem('bearerToken', headers.authorization);
    }

    return JSON.parse(data);
  }

  static clearToken(data, headers) {
    this.storage.removeItem('bearerToken');
  }

  constructor(HTTPdriver) {
    this.request = HTTPdriver.create({
      // baseURL: 'http://localhost:3000',
      baseURL: 'https://api.mylsd.anadea.co',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      transformRequest: [
        Api.addTokenToRequest.bind(Api),
      ],
      transformResponse: [
        Api.saveTokenFromResponse.bind(Api),
      ],
    });
  }

  physicianLogin(params) {
    return this.request
      .post('/api/v1/physicians/sign_in', params);
  }

  physicianLogout() {
    return this.request
      .delete('/api/v1/physicians/sign_out')
      .finally(() => Api.saveTokenFromResponse.bind(Api));
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

export default new Api(axios);
