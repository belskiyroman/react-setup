import { PATIENT_QOL_REQUEST_SUCCESS } from '../../types';
import { PAGINATION_BUTCH_SIZE } from '../../constants/common.const';

const initialState = {
  isLoaded: false,
  data: [
    { id: '2018-08-10', key: '10', value: 40 },
    { id: '2018-08-11', key: '11', value: 38 },
    { id: '2018-08-12', key: '12', value: 94 },
    { id: '2018-08-13', key: '13', value: 150 },
    { id: '2018-08-14', key: '14', value: 60 },
    { id: '2018-08-15', key: '15', value: 90 },
    { id: '2018-08-16', key: '16', value: 85 },
  ],
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
