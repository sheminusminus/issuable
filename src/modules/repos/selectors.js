import { createSelector } from 'reselect';

import { name } from './reducer';

const getState = state => state[name];

export const getRepos = createSelector(
  [getState],
  state => state.repos,
);

export const getFetchingRepos = createSelector(
  [getState],
  state => state.fetchingRepos,
);

export const getIssues = createSelector(
  [getState],
  state => state.issues,
);

export const getFetchingIssues = createSelector(
  [getState],
  state => state.fetchingIssues,
);
