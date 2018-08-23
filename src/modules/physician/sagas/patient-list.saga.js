import {
  take, put, select, call,
} from 'redux-saga/effects';
import { PATIENT_LIST_REQUEST } from '../../types';
import { putPatientListAction } from '../../actions';
import { PAGINATION_BUTCH_SIZE } from '../../constants';
import { api } from '../../../utils';

// todo: refactoring
function* patientListSaga() {
  while (true) {
    try {
      const { payload = {} } = yield take(PATIENT_LIST_REQUEST);
      const { currentPage, isLoaded } = yield select(state => state.physician.patientList);

      if (!isLoaded) {
        const { data } = yield call([api, api.patientList], {
          filters: {
            page: payload.page || currentPage,
            per: PAGINATION_BUTCH_SIZE,
          },
        });
        yield put(putPatientListAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default patientListSaga;
