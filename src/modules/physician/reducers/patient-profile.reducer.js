import { PATIENT_PROFILE_REQUEST_SUCCESS } from '../types/index';

const initialState = {
  data: {},
};

const patientProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_PROFILE_REQUEST_SUCCESS: {
      const { resource } = payload;
      return {
        ...state,
        data: resource,
      };
    }
    default: return state;
  }
};

export default patientProfileReducer;
