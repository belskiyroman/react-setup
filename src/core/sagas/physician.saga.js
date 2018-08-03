import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_LIST_REQUEST } from '../types';
import { putPatientListAction } from '../actions';
import { PAGINATION_BUTCH_SIZE } from '../constants';
import { Api } from '../../utils';

function* physicianSaga() {
  while (true) {
    try {
      const { payload = {} } = yield take(PATIENT_LIST_REQUEST);
      const isPatientListLoaded = yield select(state => state.physician.isPatientListLoaded);
      const { pagination } = yield select(state => state.physician.patientListMeta);

      if (!isPatientListLoaded) {
        const data = yield call(Api.patientList, {
          offset: payload.offset || pagination.offset,
          batch_size: PAGINATION_BUTCH_SIZE,
        });
        yield put(putPatientListAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default physicianSaga;
