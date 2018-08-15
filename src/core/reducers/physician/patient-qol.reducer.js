import { PATIENT_QOL_REQUEST_SUCCESS } from '../../types';
import { PAGINATION_BUTCH_SIZE } from '../../constants/common.const';

const initialState = {
  isLoaded: false,
  data: [],
  meta: {
    pagination: {
      current: 1,
      total: 1,
      per_page: PAGINATION_BUTCH_SIZE,
    },
  },
};

const patientQoLReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_QOL_REQUEST_SUCCESS: {
      const { resources: data, meta } = payload;
      return {
        ...state,
        data,
        meta,
        isLoaded: true,
      };
    }
    default: return state;
  }
};

export default patientQoLReducer;
