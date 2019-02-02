import * as constants from './constants';

export function requestRepos() {
  return {
    type: constants.REPOS_REQUEST,
  };
}

export function reposSuccess(repos) {
  return {
    type: constants.REPOS_SUCCESS,
    payload: {
      repos,
    },
  };
}

export function reposFailure(error) {
  return {
    type: constants.REPOS_FAILURE,
    payload: {
      error,
    },
  };
}

export function requestIssues(repoId) {
  return {
    type: constants.ISSUES_REQUEST,
    payload: {
      repoId,
    },
  };
}

export function issuesSuccess(repoId, issues) {
  return {
    type: constants.ISSUES_SUCCESS,
    payload: {
      issues,
      repoId,
    },
  };
}

export function issuesFailure(error) {
  return {
    type: constants.ISSUES_FAILURE,
    payload: {
      error,
    },
  };
}
