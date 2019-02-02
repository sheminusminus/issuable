import { combineReducers } from 'redux';

import { reducer as auth } from 'modules/auth';

export default combineReducers({
  [auth.name]: auth.reducer,
});
