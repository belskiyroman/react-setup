import { spawn, all } from 'redux-saga/effects';

import patientList from './patient-list.saga';

const sagas = [
  patientList,
];

const physicianRootSaga = function* physicianRootSaga() {
  yield all(sagas.map(spawn));
};

export default physicianRootSaga;
