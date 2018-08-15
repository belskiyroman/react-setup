import { PATIENT_BIOMARKERS_REQUEST_SUCCESS } from '../../types';
import { PAGINATION_BUTCH_SIZE } from '../../constants/common.const';

const stub = [
  {
    id: 235,
    date: '2018-08-10',
    value: 204.0,
  },
  {
    id: 236,
    date: '2018-08-05',
    value: 204.0,
  },
  {
    id: 237,
    date: '2018-07-31',
    value: 204.0,
  },
];

const initialState = {
  isLoaded: false,
  data: stub,
  meta: {
    pagination: {
      current: 1,
      total: 1,
      per_page: PAGINATION_BUTCH_SIZE,
    },
  },
};

const patientBiomarkersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_BIOMARKERS_REQUEST_SUCCESS: {
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

export default patientBiomarkersReducer;
