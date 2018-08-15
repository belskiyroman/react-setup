import { spawn, all } from 'redux-saga/effects';

import physicianRootSaga from './physician';

const sagas = [
  physicianRootSaga,
];

const rootSaga = function* rootSaga() {
  yield all(sagas.map(spawn));
};

export default rootSaga;
