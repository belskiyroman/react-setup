import {
  take, put, call,
} from 'redux-saga/effects';
import { PATIENT_TREATMENTS_REQUEST } from '../types/index';
import { requestErrorAction, putPatientTreatmentsAction } from '../actions/index';
import { api } from '../services';

function* patientTreatmentsSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_TREATMENTS_REQUEST);
      const { data } = yield call([api, api.patientTreatments], id);
      yield put(putPatientTreatmentsAction(data));
    } catch (error) {
      yield put(requestErrorAction(error, PATIENT_TREATMENTS_REQUEST));
    }
  }
}

export default patientTreatmentsSaga;
