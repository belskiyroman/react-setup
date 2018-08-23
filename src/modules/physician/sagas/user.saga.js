import {
  take, put, select, call,
} from 'redux-saga/effects';
import { USER_LOGIN_REQUEST } from '../../types';
import { loginSuccessAction, loginErrorAction } from '../../actions';
import { api } from '../../../utils';

function* userLoginSaga() {
  while (true) {
    try {
      const { payload = {} } = yield take(USER_LOGIN_REQUEST);
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

export default userLoginSaga;
