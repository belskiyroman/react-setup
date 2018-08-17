import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://api.mylsd.anadea.co',
  timeout: 5000,
  withCredentials: true,
  // transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

class Api {
  static physicianLogin(params) {
    return request
      .post('/api/v1/physicians/sign_in', params)
      .then(res => res.data);
  }

  static patientList(params) {
    return axios
      .get('/api/v1/physician/patients', params)
      .then(res => res.data);
  }

  static patientProfile(id) {
    return axios
      .get(`/api/v1/physician/patients/${id}`)
      .then(res => res.data);
  }
}

export default Api;
