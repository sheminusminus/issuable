import { take, call, fork, put } from 'redux-saga/effects';

import * as api from './api';
import * as actions from './actions';
import * as constants from './constants';
import * as parse from './parse';

/**
 *  Side effect manager, request user github repositories
 */
export function* requestRepos() {
  try {
    const response = yield call(
      api.getUserRepos,
    );

    const { data } = response;
    const formattedRepos = parse.formatRepos(data);

    // dispatch the repos object onto the store
    yield put(actions.reposSuccess(formattedRepos));
  } catch (error) {
    yield put(actions.reposFailure(error));
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
