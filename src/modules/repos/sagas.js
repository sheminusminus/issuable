import { take, call, fork, put, select } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import * as api from './api';
import * as actions from './actions';
import * as constants from './constants';
import * as parse from './parse';
import * as selectors from './selectors';

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
 *  Side effect manager, request repository issues
 */
export function* requestIssues(repoId) {
  try {
    const repos = yield select(selectors.getRepos);

    const repoData = repos[repoId] || {};
    const issuesUrl = repoData.issues_url || '';
    const fetchUrl = issuesUrl.replace('{/number}', '');

    const response = yield call(
      api.getRepoIssues,
      fetchUrl,
    );

    const { data } = response;
    const formattedIssues = parse.formatIssues(data);

    // dispatch the issues object onto the store
    yield put(actions.issuesSuccess(repoId, formattedIssues));
  } catch (error) {
    yield put(actions.issuesFailure(error));
  }
}

/**
 *  Generator function to listen for redux actions
 */
function* watch() {
  yield take(REHYDRATE);

  while (true) {
    const { type, payload = {} } = yield take([
      constants.REPOS_REQUEST,
      constants.ISSUES_REQUEST,
    ]);

    switch (type) {
      case constants.REPOS_REQUEST:
        yield fork(requestRepos);
        break;

      case constants.ISSUES_REQUEST:
        yield fork(requestIssues, payload.repoId);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
