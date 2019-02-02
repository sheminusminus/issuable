import * as constants from './constants';

export const name = 'repos';

export const initialState = {
  repos: {},
  fetchingRepos: false,
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

    default:
      return state;
  }
}
