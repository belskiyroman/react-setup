import {
  take, put, select, call, spawn, all,
} from 'redux-saga/effects';
import { USER_LOGIN_REQUEST, USER_LOGOUT_REQUEST } from '../types';
import {
  loginSuccessAction,
  loginErrorAction,
  logoutSuccessAction,
  logoutErrorAction,
} from '../actions';
import { api } from '../services';

function* userLoginSaga() {
  while (true) {
    try {
      const { payload = { email: '', password: '' } } = yield take(USER_LOGIN_REQUEST);
      const isLogin = yield select(state => state.user.isLogin);

      if (!isLogin) {
        const { data } = yield call([api, api.physicianLogin], {
          physician: payload,
        });
        yield put(loginSuccessAction(data));
      }
    } catch (error) {
      yield put(loginErrorAction(error));
    }
  }
}

function* userLogoutSaga() {
  while (true) {
    try {
      yield take(USER_LOGOUT_REQUEST);
      yield call([api, api.physicianLogout]);
      yield put(logoutSuccessAction());
    } catch (error) {
      yield put(logoutErrorAction(error));
    }
  }
}

export default function* () {
  yield all([
    spawn(userLoginSaga),
    spawn(userLogoutSaga),
  ]);
}
