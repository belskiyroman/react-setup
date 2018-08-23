/* eslint-disable max-len */

import {
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_REQUEST_SUCCESS,
  PATIENT_LIST_REQUEST_ERROR,
} from '../types';

export const getPatientListAction = payload => ({
  payload,
  type: PATIENT_LIST_REQUEST,
});
export const putPatientListAction = payload => ({
  payload,
  type: PATIENT_LIST_REQUEST_SUCCESS,
});
export const errorPatientListAction = payload => ({
  payload,
  type: PATIENT_LIST_REQUEST_ERROR,
});
