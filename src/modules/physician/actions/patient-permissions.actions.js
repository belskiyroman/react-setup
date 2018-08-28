import {
  PATIENT_BIOMARKERS_PERMISSIONS_REQUEST,
  PATIENT_QOL_PERMISSIONS_REQUEST,
} from '../types';

export const getPatientBiomarkersPermissionAction = payload => ({
  payload,
  type: PATIENT_BIOMARKERS_PERMISSIONS_REQUEST,
});

export const getPatientQoLPermissionAction = payload => ({
  payload,
  type: PATIENT_QOL_PERMISSIONS_REQUEST,
});
