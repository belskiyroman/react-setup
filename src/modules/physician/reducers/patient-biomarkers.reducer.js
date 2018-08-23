import { PATIENT_BIOMARKERS_REQUEST_SUCCESS } from '../types/index';

const initialState = {
  currentPage: 1,
  totalPage: 1,
  data: [],
};

const patientBiomarkersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_BIOMARKERS_REQUEST_SUCCESS: {
      const { resources = [], meta = {} } = payload;
      const { total, per_page, current: currentPage = 1 } = meta.pagination || {};
      return {
        ...state,
        currentPage,
        totalPage: Math.ceil(total / per_page),
        data: resources,
      };
    }
    default: return state;
  }
};

export default patientBiomarkersReducer;
