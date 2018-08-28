import {
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_REQUEST_SUCCESS,
  PATIENT_LIST_REQUEST_FILTERS,
} from '../types';

export const getPatientListAction = payload => ({
  payload,
  type: PATIENT_LIST_REQUEST,
});

export const putPatientListAction = payload => ({
  payload,
  type: PATIENT_LIST_REQUEST_SUCCESS,
});

export const putPatientListRequestFiltersAction = payload => ({
  payload,
  type: PATIENT_LIST_REQUEST_FILTERS,
});
