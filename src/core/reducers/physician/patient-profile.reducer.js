import { PATIENT_PROFILE_REQUEST_SUCCESS } from '../../types';
import { PAGINATION_BUTCH_SIZE } from '../../constants';

const initialState = {
  isLoaded: false,
  data: {},
  meta: {
    pagination: {
      current: 1,
      total: 1,
      per_page: PAGINATION_BUTCH_SIZE,
    },
  },
};

const patientProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_PROFILE_REQUEST_SUCCESS: {
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

export default patientProfileReducer;
