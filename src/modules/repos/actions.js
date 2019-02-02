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
