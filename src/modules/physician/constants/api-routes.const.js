const pagination = 'filters[page]=:page&filters[per]=:per';
const search = 'filters[search]=:search';
const orderBy = 'filters[order_asc]=:order_asc&filters[order_desc]=:order_desc';

export const API_LOGIN = '/api/v1/physicians/sign_in';
export const API_LOGOUT = '/api/v1/physicians/sign_out';
export const API_PATIENTS = `/api/v1/physician/patients?${pagination}&${search}&${orderBy}`;
export const API_PATIENT_PROFILE = '/api/v1/physician/patients/:id';
export const API_PATIENT_TREATMENTS = '/api/v1/physician/patients/:id/treatments';
export const API_PATIENT_BIOMARKERS = '/api/v1/physician/patients/:id/biomarker_results';
