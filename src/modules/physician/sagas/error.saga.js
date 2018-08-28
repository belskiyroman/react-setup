import {
  take, put, spawn, all,
} from 'redux-saga/effects';
import { REQUEST_ERROR } from '../types/index';
import {
  UNAUTHORIZED,
} from '../../../constants/index';
import {
  logoutSuccessAction,
} from '../actions/index';

function* requestErrorSaga() {
  while (true) {
    try {
      const { payload: error } = yield take(REQUEST_ERROR);

      switch (error.status) {
        case UNAUTHORIZED: yield put(logoutSuccessAction());
          break;
        default: throw new Error('Unknown http error.');
      }
    } catch (error) {
      // todo: think about handling "Unknown http error"
      console.error(error);
    }
  }
}

export default function* () {
  yield all([
    spawn(requestErrorSaga),
  ]);
}
