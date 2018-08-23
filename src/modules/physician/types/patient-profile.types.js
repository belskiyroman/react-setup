import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_PROFILE_REQUEST } from '../types/index';
import { putPatientListAction } from '../actions/index';
import { api } from '../../../utils';

// todo: refactoring
function* patientListSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_PROFILE_REQUEST);
      const { isLoaded } = yield select(state => state.physician.patientProfile);

      if (!isLoaded) {
        const { data } = yield call([api, api.patientProfile], id);
        yield put(putPatientListAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientListSaga;
