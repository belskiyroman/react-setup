const axios = require('axios');

class Api {
  static patientList(params) {
    return axios
      .get('http://localhost:3000/patient-list', params)
      .then(res => res.data);
  }
}

export default Api;
