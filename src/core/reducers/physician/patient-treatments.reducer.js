import { PATIENT_TREATMENTS_REQUEST_SUCCESS } from '../../types';
import { PAGINATION_BUTCH_SIZE } from '../../constants/common.const';

const stub = [
  {
    id: 711,
    kind: 'ERT',
    start_date: '2018-07-10',
    end_date: null,
    drug: 'VPRIV',
    frequency: 'Once a month',
    dosage: '15.5 Unit/kg',
    current: true,
  },
  {
    id: 712,
    kind: 'ERT',
    start_date: '2018-06-10',
    end_date: '2018-07-10',
    drug: 'Elelyso',
    frequency: 'Once a month',
    dosage: '15.5 Unit/kg',
    current: false,
  },
  {
    id: 713,
    kind: 'SRT',
    start_date: '2018-04-10',
    end_date: '2018-05-10',
    drug: 'Celdega',
    frequency: 'Once a month',
    dosage: '15.5 Pill',
    current: false,
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

const patientTreatmentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_TREATMENTS_REQUEST_SUCCESS: {
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

export default patientTreatmentsReducer;
