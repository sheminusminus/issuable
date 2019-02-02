import { take, call, fork, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { FetchService } from 'services';

import * as constants from './constants';
import * as selectors from './selectors';

/**
 *  Side effect manager, just sets auth header on the fetch service
 */
export function* setAuthToken(token) {
  try {
    yield call(FetchService.setAuth, token);
  } catch (error) {
    yield false;
  }
}

/**
 *  Generator function to listen for redux actions
 */
function* watch() {
  // wait until store is rehydrated
  yield take(REHYDRATE);

  // see if we have a token persisted to state
  const persistedToken = yield select(selectors.getToken);
  if (persistedToken) {
    // if so, set the auth header on future requests
    yield fork(setAuthToken, persistedToken);
  }

  while (true) {
    const { type, payload = {} } = yield take([
      constants.SAVE_TOKEN,
    ]);

    switch (type) {
      case constants.SET_AUTH:
        yield fork(setAuthToken, payload.token);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
