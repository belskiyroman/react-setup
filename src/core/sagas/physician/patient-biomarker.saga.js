import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_BIOMARKERS_REQUEST } from '../../types';
import { putPatientBiomarkersAction } from '../../actions';
import { PAGINATION_BUTCH_SIZE } from '../../constants';
import { Api } from '../../../utils';

function* patientBiomarkersSaga() {
  while (true) {
    try {
      const { payload = {} } = yield take(PATIENT_BIOMARKERS_REQUEST);
      const isPatientListLoaded = yield select(state => state.physician.patientBiomarkers.isLoaded);
      const { pagination } = yield select(state => state.physician.patientBiomarkers.meta);

      if (!isPatientListLoaded) {
        const data = yield call(Api.patientList, {
          offset: payload.offset || pagination.offset,
          batch_size: PAGINATION_BUTCH_SIZE,
        });
        yield put(putPatientBiomarkersAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientBiomarkersSaga;
