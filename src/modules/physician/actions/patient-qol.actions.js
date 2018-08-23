/* eslint-disable max-len */

import {
  PATIENT_QOL_REQUEST,
  PATIENT_QOL_REQUEST_SUCCESS,
  PATIENT_QOL_REQUEST_ERROR,
} from '../types';

export const getPatientQoLAction = payload => ({
  payload,
  type: PATIENT_QOL_REQUEST,
});
export const putPatientQoLAction = payload => ({
  payload,
  type: PATIENT_QOL_REQUEST_SUCCESS,
});
export const errorPatientQoLAction = payload => ({
  payload,
  type: PATIENT_QOL_REQUEST_ERROR,
});
