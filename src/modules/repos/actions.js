import * as constants from './constants';

export function requestRepos() {
  return {
    type: constants.REPOS_REQUEST,
  };
}
