import {
  USER_LOGIN_RESET_ERROR,
  USER_LOGIN_REQUEST_ERROR,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_REQUEST_SUCCESS,
} from '../types/user.types';

const initialState = {
  isLogin: false,
  loginError: false,
  profile: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST_ERROR:
      return {
        ...state,
        loginError: true,
      };
    case USER_LOGIN_RESET_ERROR:
      return {
        ...state,
        loginError: false,
      };
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
