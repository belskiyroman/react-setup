/* eslint-disable max-len */

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_ERROR,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_REQUEST_SUCCESS,
  USER_LOGOUT_REQUEST_ERROR,
} from '../types';

export const loginAction = payload => ({ type: USER_LOGIN_REQUEST, payload });
export const loginSuccessAction = payload => ({ type: USER_LOGIN_REQUEST_SUCCESS, payload });
export const loginErrorAction = payload => ({ type: USER_LOGIN_REQUEST_ERROR, payload });

export const logoutAction = payload => ({ type: USER_LOGOUT_REQUEST, payload });
export const logoutSuccessAction = payload => ({ type: USER_LOGOUT_REQUEST_SUCCESS, payload });
export const logoutErrorAction = payload => ({ type: USER_LOGOUT_REQUEST_ERROR, payload });
