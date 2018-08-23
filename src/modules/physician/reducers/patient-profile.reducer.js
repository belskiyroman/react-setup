import { PATIENT_PROFILE_REQUEST_SUCCESS } from '../../types';

const initialState = {
  isLoaded: false,
  data: {},
};

const patientProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PATIENT_PROFILE_REQUEST_SUCCESS: {
      const { resource } = payload;
      return {
        ...state,
        data: resource,
        isLoaded: true,
      };
    }
    default: return state;
  }
};

export default patientProfileReducer;
