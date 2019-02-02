import { combineReducers } from 'redux';

import { reducer as auth } from 'modules/auth';
import { reducer as repos } from 'modules/repos';

export default combineReducers({
  [auth.name]: auth.reducer,
  [repos.name]: repos.reducer,
});
