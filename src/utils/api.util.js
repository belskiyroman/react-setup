const axios = require('axios');

class Api {
  static patientList(params) {
    return axios
      .get('/api/patient-list', params)
      .then(res => res.data);
  }
}

export default Api;
