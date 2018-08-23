import { getDeepObjectValue } from 'validate.js';
import { getStore } from './index';

const getFromStore = keyPath => getDeepObjectValue(getStore().getState(), keyPath);

export default getFromStore;
