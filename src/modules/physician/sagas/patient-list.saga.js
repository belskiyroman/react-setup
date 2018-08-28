import {
  take, put, call, select, spawn, all,
} from 'redux-saga/effects';
import { PAGINATION_BUTCH_SIZE } from '../../../constants/index';
import { PATIENT_LIST_REQUEST, PATIENT_LIST_REQUEST_FILTERS } from '../types/index';
import { requestErrorAction, putPatientListAction } from '../actions/index';
import { api } from '../services';

function* patientListRequestSaga({
  currentPage: page, search, sortBy, inactive,
}) {
  try {
    const { data } = yield call([api, api.patientList], {
      page: page || 1,
      search: search || '',
      orderAsc: sortBy || '',
      orderDesc: '',
      inactive,
      per: PAGINATION_BUTCH_SIZE,
    });

    yield put(putPatientListAction(data));
  } catch (error) {
    yield put(requestErrorAction(error, PATIENT_LIST_REQUEST));
  }
}

function* patientListSaga() {
  while (true) {
    yield take(PATIENT_LIST_REQUEST);
    const { currentPage, sortBy, search } = yield select(state => state.patientList);
    yield* patientListRequestSaga({ currentPage, sortBy, search });
  }
}

function* patientListFilteredSaga() {
  while (true) {
    const { payload } = yield take(PATIENT_LIST_REQUEST_FILTERS);
    const stateParams = yield select(state => state.patientList);
    yield* patientListRequestSaga({ ...stateParams, ...payload });
  }
}

export default function* () {
  yield all([
    spawn(patientListSaga),
    spawn(patientListFilteredSaga),
  ]);
}
