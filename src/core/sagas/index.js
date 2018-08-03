import { spawn, all } from 'redux-saga/effects';
import physicianSaga from './physician.saga';

const sagas = [
  physicianSaga,
];

const rootSaga = function* rootSaga() {
  yield all(sagas.map(spawn));
};

export default rootSaga;
