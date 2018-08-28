import { spawn, all } from 'redux-saga/effects';

import errorSaga from './error.saga';
import userSaga from './user.saga';
import patientList from './patient-list.saga';
import patientProfileSaga from './patient-profile.saga';
import patientTreatment from './patient-treatment.saga';
import patientBiomarker from './patient-biomarker.saga';
// import patientQol from './patient-qol.saga';
import patientPermissions from './patient-permissions.saga';

const sagas = [
  errorSaga,
  userSaga,
  patientList,
  patientProfileSaga,
  patientTreatment,
  patientBiomarker,
  // patientQol,
  patientPermissions,
];

const physicianRootSaga = function* rootSaga() {
  yield all(sagas.map(spawn));
};

export default physicianRootSaga;
