import {
  PATIENT_LIST_REQUEST_SUCCESS,
  PATIENT_LIST_REQUEST_FILTERS,
} from '../types/index';

const initialState = {
  currentPage: 1,
  totalPage: 1,
  search: '',
  sortBy: '',
  inactive: true,
  data: [],
};

const patientListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_LIST_REQUEST_SUCCESS: {
      const { resources = [], meta = {} } = payload;
      const { total, per_page, current: currentPage = 1 } = meta.pagination || {};
      return {
        ...state,
        currentPage,
        totalPage: Math.ceil(total / per_page),
        data: resources,
      };
    }
    case PATIENT_LIST_REQUEST_FILTERS: {
      return {
        ...state,
        ...payload,
      };
    }
    default: return state;
  }
};

export default patientListReducer;
