/* eslint-disable max-len */

import {
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_REQUEST_SUCCESS,
  PATIENT_LIST_REQUEST_ERROR,
  PATIENT_PROFILE_REQUEST,
  PATIENT_PROFILE_REQUEST_ERROR,
  PATIENT_PROFILE_REQUEST_SUCCESS,
  PATIENT_BIOMARKERS_REQUEST,
  PATIENT_BIOMARKERS_REQUEST_SUCCESS,
  PATIENT_BIOMARKERS_REQUEST_ERROR,
  PATIENT_TREATMENTS_REQUEST,
  PATIENT_TREATMENTS_REQUEST_SUCCESS,
  PATIENT_TREATMENTS_REQUEST_ERROR,
  PATIENT_QOL_REQUEST,
  PATIENT_QOL_REQUEST_SUCCESS,
  PATIENT_QOL_REQUEST_ERROR,
} from '../types';

export const getPatientListAction = payload => ({ type: PATIENT_LIST_REQUEST, payload });
export const putPatientListAction = payload => ({ type: PATIENT_LIST_REQUEST_SUCCESS, payload });
export const errorPatientListAction = payload => ({ type: PATIENT_LIST_REQUEST_ERROR, payload });

export const getPatientProfileAction = payload => ({ type: PATIENT_PROFILE_REQUEST, payload });
export const putPatientProfileAction = payload => ({ type: PATIENT_PROFILE_REQUEST_ERROR, payload });
export const errorPatientProfileAction = payload => ({ type: PATIENT_PROFILE_REQUEST_SUCCESS, payload });

export const getPatientBiomarkersAction = payload => ({ type: PATIENT_BIOMARKERS_REQUEST, payload });
export const putPatientBiomarkersAction = payload => ({ type: PATIENT_BIOMARKERS_REQUEST_SUCCESS, payload });
export const errorPatientBiomarkersAction = payload => ({ type: PATIENT_BIOMARKERS_REQUEST_ERROR, payload });

export const getPatientTreatmentsAction = payload => ({ type: PATIENT_TREATMENTS_REQUEST, payload });
export const putPatientTreatmentsAction = payload => ({ type: PATIENT_TREATMENTS_REQUEST_SUCCESS, payload });
export const errorPatientTreatmentsAction = payload => ({ type: PATIENT_TREATMENTS_REQUEST_ERROR, payload });

export const getPatientQoLAction = payload => ({ type: PATIENT_QOL_REQUEST, payload });
export const putPatientQoLAction = payload => ({ type: PATIENT_QOL_REQUEST_SUCCESS, payload });
export const errorPatientQoLAction = payload => ({ type: PATIENT_QOL_REQUEST_ERROR, payload });
