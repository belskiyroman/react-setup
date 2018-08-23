import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_LIST_REQUEST } from '../types/index';
import { putPatientListAction } from '../actions/index';
import { PAGINATION_BUTCH_SIZE } from '../../../constants/index';
import { api } from '../services';

function* patientListSaga() {
  while (true) {
    try {
      const { payload = {} } = yield take(PATIENT_LIST_REQUEST);
      const { currentPage } = yield select(state => state.patientList);
      const { data } = yield call([api, api.patientList], {
        filters: {
          page: payload.page || currentPage,
          per: PAGINATION_BUTCH_SIZE,
        },
      });
      yield put(putPatientListAction(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientListSaga;
