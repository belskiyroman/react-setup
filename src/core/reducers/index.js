import { combineReducers } from 'redux';

import user from './user.reducer';
import physician from './physician';

export default combineReducers({
  user,
  physician,
});
