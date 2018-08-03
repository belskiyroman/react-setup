import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_LIST_REQUEST } from '../types';
import { putPatientListAction } from '../actions';
import { Api } from '../../utils';

function* physicianSaga() {
  while (true) {
    try {
      yield take(PATIENT_LIST_REQUEST);
      const isPatientListLoaded = yield select(state => state.physician.isPatientListLoaded);

      if (!isPatientListLoaded) {
        const data = yield call(Api.patientList);
        yield put(putPatientListAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default physicianSaga;
