import { spawn, all } from 'redux-saga/effects';

import userLoginSaga from './login.saga';

const sagas = [
  userLoginSaga,
];

const userRootSaga = function* physicianRootSaga() {
  yield all(sagas.map(spawn));
};

export default userRootSaga;
