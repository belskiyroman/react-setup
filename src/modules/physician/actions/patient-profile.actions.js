/* eslint-disable max-len */

import {
  PATIENT_PROFILE_REQUEST,
  PATIENT_PROFILE_REQUEST_ERROR,
  PATIENT_PROFILE_REQUEST_SUCCESS,
} from '../types';

export const getPatientProfileAction = payload => ({
  payload,
  type: PATIENT_PROFILE_REQUEST,
});
export const putPatientProfileAction = payload => ({
  payload,
  type: PATIENT_PROFILE_REQUEST_ERROR,
});
export const errorPatientProfileAction = payload => ({
  payload,
  type: PATIENT_PROFILE_REQUEST_SUCCESS,
});
