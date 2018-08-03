const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

const data = [
  {
    id: 92362385,
    current_physician_id: 1,
    first_name: 'Scott',
    last_name: 'Mitchell',
    patient_data: {
      date_of_birth: '1973-12-13',
      gender: 'male',
      country: 'UK',
      phone: '673-070-6726',
      disease: 'gaucher',
    },
    biomarker_data: {
      id: 67,
      first_treatment_date: '2018-01-01',
      date: '2018-08-02',
      value: 51.51,
      previous_value: 60,
    },
    last_qol_data: {
      date: '2018-01-27',
    },
  },
  {
    id: 95662385,
    current_physician_id: 1,
    first_name: 'Reinhold Alexander Moritz',
    last_name: 'Wolf',
    patient_data: null,
    biomarker_data: {
      id: 67,
      first_treatment_date: '2018-01-01',
      date: '2018-05-02',
      value: 71.51,
      previous_value: 40,
    },
    last_qol_data: {
      date: '2018-01-27',
    },
  },
  {
    id: 92547357,
    current_physician_id: 1,
    first_name: 'Georgie',
    last_name: 'Ward',
    patient_data: {
      date_of_birth: '1973-12-13',
      gender: 'male',
      country: 'UK',
      phone: '673-070-6726',
      disease: 'gaucher',
    },
    biomarker_data: null,
    last_qol_data: {
      date: '2018-01-27',
    },
  },
  {
    id: 92346885,
    current_physician_id: 1,
    first_name: 'Clara',
    last_name: 'Cole',
    patient_data: {
      date_of_birth: '1973-12-13',
      gender: 'male',
      country: 'UK',
      phone: '673-070-6726',
      disease: 'gaucher',
    },
    biomarker_data: {
      id: 67,
      first_treatment_date: '2018-01-01',
      date: '2018-08-02',
      value: 70,
      previous_value: 50,
    },
    last_qol_data: null,
  },
  {
    id: 92362123,
    current_physician_id: 1,
    first_name: 'Ola',
    last_name: 'Romero',
    patient_data: null,
    biomarker_data: null,
    last_qol_data: null,
  },
  {
    id: 92364385,
    current_physician_id: 1,
    first_name: 'Fanny',
    last_name: 'Barrett',
    patient_data: {
      date_of_birth: '1973-12-13',
      gender: 'male',
      country: 'UK',
      phone: '673-070-6726',
      disease: 'gaucher',
    },
    biomarker_data: {
      id: 67,
      first_treatment_date: '2018-01-01',
      date: '2018-08-02',
      value: 110,
      previous_value: 50,
    },
    last_qol_data: null,
  },
  {
    id: 92302385,
    current_physician_id: 2,
    first_name: 'Bess',
    last_name: 'Adams',
    patient_data: {
      date_of_birth: '1973-12-13',
      gender: 'male',
      country: 'UK',
      phone: '673-070-6726',
      disease: 'gaucher',
    },
    biomarker_data: {
      id: 67,
      first_treatment_date: '2018-01-01',
      date: '2018-08-02',
      value: 110,
      previous_value: 120,
    },
    last_qol_data: null,
  },
  {
    id: 92362385,
    current_physician_id: 1,
    first_name: 'Gene',
    last_name: 'Watson',
    patient_data: {
      date_of_birth: '1973-12-13',
      gender: 'male',
      country: 'UK',
      phone: '673-070-6726',
      disease: 'gaucher',
    },
    biomarker_data: {
      id: 67,
      first_treatment_date: '2018-01-01',
      date: '2018-08-02',
      value: 51.51,
      previous_value: 60,
    },
    last_qol_data: {
      date: '2018-01-27',
    },
  },
  {
    id: 34562385,
    current_physician_id: 1,
    first_name: 'Scott',
    last_name: 'Mitchell',
    patient_data: null,
    biomarker_data: {
      id: 67,
      first_treatment_date: '2018-01-01',
      date: '2018-05-02',
      value: 51.51,
      previous_value: 60,
    },
    last_qol_data: {
      date: '2018-01-27',
    },
  },
].map((item, index) => {
  item.id = item.id + index;
  return item;
});

app.use(cors());

// serve static assets normally
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/patient-list', (req, res) => {
  // const data = Array(100).fill(0).map(() => {
  // });
  res.send({
    resources: data,
    meta: {
      pagination: {
        total: 64,
        batch_size: 10,
        offset: 0,
      },
    },
  });
});

// handle every other route with index.html
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log(`server started on port http://localhost:${port}`);
