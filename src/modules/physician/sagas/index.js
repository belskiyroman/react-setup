import { spawn, all } from 'redux-saga/effects';

import userSaga from './user.saga';
import patientList from './patient-list.saga';
import patientTreatment from './patient-treatment.saga';
import patientBiomarker from './patient-biomarker.saga';
// import patientQol from './patient-qol.saga';

const sagas = [
  userSaga,
  patientList,
  patientTreatment,
  patientBiomarker,
  // patientQol,
];

const physicianRootSaga = function* rootSaga() {
  yield all(sagas.map(spawn));
};

export default physicianRootSaga;
