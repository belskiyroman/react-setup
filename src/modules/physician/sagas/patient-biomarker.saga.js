import {
  take, put, call,
} from 'redux-saga/effects';
import { PATIENT_BIOMARKERS_REQUEST } from '../types/index';
import { putPatientBiomarkersAction, errorPatientBiomarkersAction } from '../actions/index';
import { api } from '../services';

function* patientBiomarkersSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_BIOMARKERS_REQUEST);
      const { data } = yield call([api, api.patientBiomarkers], id);
      yield put(putPatientBiomarkersAction(data));
    } catch (error) {
      errorPatientBiomarkersAction(error);
    }
  }
}

export default patientBiomarkersSaga;
