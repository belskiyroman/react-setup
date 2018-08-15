import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_TREATMENTS_REQUEST } from '../../types';
import { putPatientTreatmentsAction } from '../../actions';
import { PAGINATION_BUTCH_SIZE } from '../../constants';
import { Api } from '../../../utils';

function* patientTreatmentsSaga() {
  while (true) {
    try {
      const { payload = {} } = yield take(PATIENT_TREATMENTS_REQUEST);
      const isPatientListLoaded = yield select(state => state.physician.patientTreatments.isLoaded);
      const { pagination } = yield select(state => state.physician.patientTreatments.meta);

      if (!isPatientListLoaded) {
        const data = yield call(Api.patientList, {
          offset: payload.offset || pagination.offset,
          batch_size: PAGINATION_BUTCH_SIZE,
        });
        yield put(putPatientTreatmentsAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientTreatmentsSaga;
