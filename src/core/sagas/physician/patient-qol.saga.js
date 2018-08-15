import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_QOL_REQUEST } from '../../types';
import { putPatientQoLAction } from '../../actions';
import { Api } from '../../../utils';

function* patientQoLSaga() {
  while (true) {
    try {
      const { payload = {} } = yield take(PATIENT_QOL_REQUEST);
      const isLoaded = yield select(state => state.physician.patientQoL.isLoaded);
      const { pagination } = yield select(state => state.physician.patientQoL.meta);

      if (!isLoaded) {
        const data = yield call(Api.patientQoL);
        yield put(putPatientQoLAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientQoLSaga;
