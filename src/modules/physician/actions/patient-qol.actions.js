import {
  PATIENT_QOL_REQUEST,
  PATIENT_QOL_REQUEST_SUCCESS,
} from '../types';

export const getPatientQoLAction = payload => ({
  payload,
  type: PATIENT_QOL_REQUEST,
});
export const putPatientQoLAction = payload => ({
  payload,
  type: PATIENT_QOL_REQUEST_SUCCESS,
});
