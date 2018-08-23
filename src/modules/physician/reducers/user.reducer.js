import {
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_REQUEST_SUCCESS,
} from '../types/user.types';

const initialState = {
  isLogin: false,
  profile: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLogin: true,
        profile: payload.resource,
      };
    case USER_LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        isLogin: false,
        profile: {},
      };
    default: return state;
  }
};

export default userReducer;
