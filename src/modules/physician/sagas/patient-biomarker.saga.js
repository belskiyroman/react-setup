import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_BIOMARKERS_REQUEST } from '../../types';
import { putPatientBiomarkersAction, errorPatientBiomarkersAction } from '../../actions';
import { api } from '../../../utils';

function* patientBiomarkersSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_BIOMARKERS_REQUEST);
      const { isLoaded } = yield select(state => state.physician.patientBiomarkers);

      if (!isLoaded) {
        const { data } = yield call([api, api.patientBiomarkers], id);
        yield put(putPatientBiomarkersAction(data));
      }
    } catch (error) {
      errorPatientBiomarkersAction(error);
    }
  }
}

export default patientBiomarkersSaga;
