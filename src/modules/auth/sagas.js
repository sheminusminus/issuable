import { take, call, fork } from 'redux-saga/effects';

import { FetchService } from 'services';

import * as constants from './constants';

/**
 *  Side effect manager, just sets auth header on the fetch service
 */
export function* saveAuthToken(token) {
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
  while (true) {
    const { type, payload = {} } = yield take([
      constants.SAVE_TOKEN,
    ]);

    switch (type) {
      case constants.SAVE_TOKEN:
        yield fork(saveAuthToken, payload.token);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
