import {
  PATIENT_TREATMENTS_REQUEST,
  PATIENT_TREATMENTS_REQUEST_SUCCESS,
  PATIENT_TREATMENTS_REQUEST_FILTERS,
} from '../types';

export const getPatientTreatmentsAction = payload => ({
  payload,
  type: PATIENT_TREATMENTS_REQUEST,
});

export const putPatientTreatmentsAction = payload => ({
  payload,
  type: PATIENT_TREATMENTS_REQUEST_SUCCESS,
});

export const putTreatmentsRequestFiltersAction = payload => ({
  payload,
  type: PATIENT_TREATMENTS_REQUEST_FILTERS,
});
