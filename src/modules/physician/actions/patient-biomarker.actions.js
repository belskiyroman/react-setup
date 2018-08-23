/* eslint-disable max-len */

import {
  PATIENT_BIOMARKERS_REQUEST,
  PATIENT_BIOMARKERS_REQUEST_SUCCESS,
  PATIENT_BIOMARKERS_REQUEST_ERROR,
} from '../types';

export const getPatientBiomarkersAction = payload => ({
  payload,
  type: PATIENT_BIOMARKERS_REQUEST,
});
export const putPatientBiomarkersAction = payload => ({
  payload,
  type: PATIENT_BIOMARKERS_REQUEST_SUCCESS,
});
export const errorPatientBiomarkersAction = payload => ({
  payload,
  type: PATIENT_BIOMARKERS_REQUEST_ERROR,
});
