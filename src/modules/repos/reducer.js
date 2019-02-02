import * as constants from './constants';

export const name = 'repos';

export const initialState = {
  repos: {},
  fetchingRepos: false,
  issues: {},
  fetchingIssues: false,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case constants.REPOS_REQUEST:
      return {
        ...state,
        fetchingRepos: true,
      };

    case constants.REPOS_SUCCESS:
      return {
        ...state,
        fetchingRepos: false,
        repos: action.payload.repos,
      };

    case constants.REPOS_FAILURE:
      return {
        ...state,
        fetchingRepos: false,
      };

    case constants.ISSUES_REQUEST:
      return {
        ...state,
        fetchingIssues: true,
      };

    case constants.ISSUES_SUCCESS:
      return {
        ...state,
        fetchingIssues: false,
        issues: action.payload.issues,
      };

    case constants.ISSUES_FAILURE:
      return {
        ...state,
        fetchingIssues: false,
      };

    default:
      return state;
  }
}
