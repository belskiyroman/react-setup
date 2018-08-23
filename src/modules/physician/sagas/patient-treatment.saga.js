import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_TREATMENTS_REQUEST } from '../../types';
import { putPatientTreatmentsAction } from '../../actions';
import { api } from '../../../utils';

function* patientTreatmentsSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_TREATMENTS_REQUEST);
      const { isLoaded } = yield select(state => state.physician.patientTreatments);

      if (!isLoaded) {
        const { data } = yield call([api, api.patientTreatments], id);
        yield put(putPatientTreatmentsAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientTreatmentsSaga;
