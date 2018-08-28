import {
  take, put, call, spawn, all,
} from 'redux-saga/effects';
import {
  PATIENT_BIOMARKERS_PERMISSIONS_REQUEST,
  PATIENT_QOL_PERMISSIONS_REQUEST,
} from '../types/index';
import { requestErrorAction } from '../actions/index';
import { api } from '../services';

function* biomarkersPermissions() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_BIOMARKERS_PERMISSIONS_REQUEST);
      yield call([api, api.requestBiomarkersPermission], id);
    } catch (error) {
      yield put(requestErrorAction(error, PATIENT_BIOMARKERS_PERMISSIONS_REQUEST));
    }
  }
}

function* qolPermissions() {
  while (true) {
    try {
      const { payload: id } = yield take(PATIENT_QOL_PERMISSIONS_REQUEST);
      yield call([api, api.requestQoLPermission], id);
    } catch (error) {
      yield put(requestErrorAction(error, PATIENT_QOL_PERMISSIONS_REQUEST));
    }
  }
}


export default function* () {
  yield all([
    spawn(biomarkersPermissions),
    spawn(qolPermissions),
  ]);
}
