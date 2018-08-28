import {
  REQUEST_ERROR,
} from '../types';

export const requestErrorAction = (payload, requestType) => ({
  payload,
  requestType,
  type: REQUEST_ERROR,
});
