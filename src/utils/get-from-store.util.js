import { getDeepObjectValue } from 'validate.js';
import { getStore } from './index';

const isAuth = () => getDeepObjectValue(getStore().getState(), 'user.isLogin');

export default isAuth;
