import { combineReducers } from 'redux';

import user from './user.reducer';
import physician from './physician.reducer';

export default combineReducers({
  user,
  physician,
});
