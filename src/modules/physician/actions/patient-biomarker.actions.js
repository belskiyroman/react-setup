import {
  PATIENT_BIOMARKERS_REQUEST,
  PATIENT_BIOMARKERS_REQUEST_SUCCESS,
} from '../types';

export const getPatientBiomarkersAction = payload => ({
  payload,
  type: PATIENT_BIOMARKERS_REQUEST,
});
export const putPatientBiomarkersAction = payload => ({
  payload,
  type: PATIENT_BIOMARKERS_REQUEST_SUCCESS,
});
