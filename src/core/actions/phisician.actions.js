import {
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_REQUEST_SUCCESS,
  PATIENT_LIST_REQUEST_ERROR,
} from '../types';

export const getPatientListAction = payload => ({ type: PATIENT_LIST_REQUEST, payload });
export const putPatientListAction = payload => ({ type: PATIENT_LIST_REQUEST_SUCCESS, payload });
export const errorPatientListAction = payload => ({ type: PATIENT_LIST_REQUEST_ERROR, payload });
