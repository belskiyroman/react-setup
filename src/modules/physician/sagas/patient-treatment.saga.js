import {
  take, put, call,
} from 'redux-saga/effects';
import { PATIENT_TREATMENTS_REQUEST } from '../types/index';
import { putPatientTreatmentsAction } from '../actions/index';
import { api } from '../services';

function* patientTreatmentsSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_TREATMENTS_REQUEST);
      const { data } = yield call([api, api.patientTreatments], id);
      yield put(putPatientTreatmentsAction(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientTreatmentsSaga;
