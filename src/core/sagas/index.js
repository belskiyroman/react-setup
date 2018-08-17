import { spawn, all } from 'redux-saga/effects';

import userRootSaga from './user';
import physicianRootSaga from './physician';

const sagas = [
  physicianRootSaga,
  userRootSaga,
];

const rootSaga = function* rootSaga() {
  yield all(sagas.map(spawn));
};

export default rootSaga;
