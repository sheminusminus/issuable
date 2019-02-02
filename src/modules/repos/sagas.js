import { take, call, fork } from 'redux-saga/effects';

import * as api from './api';
import * as constants from './constants';

/**
 *  Side effect manager, request user github repositories
 */
export function* requestRepos() {
  try {
    const response = yield call(
      api.getUserRepos,
    );
    console.log(response);
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
      constants.REPOS_REQUEST,
    ]);

    switch (type) {
      case constants.REPOS_REQUEST:
        yield fork(requestRepos);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
