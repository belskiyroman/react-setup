import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_QOL_REQUEST } from '../../types';
import { putPatientQoLAction } from '../../actions';
import { api } from '../../../utils';

function* patientQoLSaga() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_QOL_REQUEST);
      const { isLoaded } = yield select(state => state.physician.patientQoL);

      if (!isLoaded) {
        const { data } = yield call([api, api.patientQoL], id);
        yield put(putPatientQoLAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientQoLSaga;
