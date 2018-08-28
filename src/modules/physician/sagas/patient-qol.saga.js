import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_QOL_REQUEST } from '../types/index';
import { requestErrorAction, putPatientQoLAction } from '../actions/index';
import { api } from '../services';

function* patientQoLSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_QOL_REQUEST);
      const { data } = yield call([api, api.patientQoL], id);
      yield put(putPatientQoLAction(data));
    } catch (error) {
      yield put(requestErrorAction(error, PATIENT_QOL_REQUEST));
    }
  }
}

export default patientQoLSaga;
