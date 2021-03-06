import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_ERROR,
  USER_LOGIN_RESET_ERROR,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_REQUEST_SUCCESS,
} from '../types';

export const loginAction = payload => ({
  payload,
  type: USER_LOGIN_REQUEST,
});

export const loginSuccessAction = payload => ({
  payload,
  type: USER_LOGIN_REQUEST_SUCCESS,
});

export const loginErrorAction = payload => ({
  type: USER_LOGIN_REQUEST_ERROR,
});

export const loginResetErrorAction = payload => ({
  type: USER_LOGIN_RESET_ERROR,
});

export const logoutAction = payload => ({
  payload,
  type: USER_LOGOUT_REQUEST,
});

export const logoutSuccessAction = payload => ({
  payload,
  type: USER_LOGOUT_REQUEST_SUCCESS,
});
