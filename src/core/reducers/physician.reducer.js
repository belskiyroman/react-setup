import { PATIENT_LIST_REQUEST_SUCCESS } from '../types';
import { PAGINATION_BUTCH_SIZE } from '../constants';

const initialState = {
  totalPages: 1,
  currentPage: 1,
  isPatientListLoaded: false,
  patientList: [],
  patientListMeta: {
    pagination: {
      total: 0,
      batch_size: PAGINATION_BUTCH_SIZE,
      offset: 0,
    },
  },
};

const physicianReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_LIST_REQUEST_SUCCESS: {
      const { total, batch_size, offset } = payload.meta.pagination;
      return {
        ...state,
        isPatientListLoaded: true,
        patientListMeta: payload.meta,
        patientList: payload.resources,
        totalPages: Math.ceil(total / batch_size),
        currentPage: Math.ceil(offset / batch_size),
      };
    }
    default: return state;
  }
};

export default physicianReducer;
