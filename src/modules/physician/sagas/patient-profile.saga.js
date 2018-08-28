import {
  take, put, call,
} from 'redux-saga/effects';
import { PATIENT_PROFILE_REQUEST } from '../types/index';
import { requestErrorAction, putPatientProfileAction } from '../actions/index';
import { api } from '../services';

function* patientProfileSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_PROFILE_REQUEST);
      const { data } = yield call([api, api.patientProfile], id);
      yield put(putPatientProfileAction(data));
    } catch (error) {
      yield put(requestErrorAction(error, PATIENT_PROFILE_REQUEST));
    }
  }
}

export default patientProfileSaga;
