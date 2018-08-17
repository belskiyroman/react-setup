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
      const { resources, meta } = payload;
      return {
        ...state,
        isLoaded: true,
        data: resources,
        totalPage: meta.pagination.total,
        currentPage: meta.pagination.current,
      };
    }
    default: return state;
  }
};

export default patientListReducer;
