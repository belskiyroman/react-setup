import { PATIENT_LIST_REQUEST_SUCCESS } from '../../types';

const initialState = {
  isLoaded: false,
  currentPage: 1,
  totalPage: 1,
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
        isLoaded: true,
        data: resources,
      };
    }
    default: return state;
  }
};

export default patientListReducer;