import { createSelector } from 'reselect';

import { name } from './reducer';

const getState = state => state[name];

export const getIssuesSort = createSelector(
  [getState],
  state => state.issuesSort,
);

export const getIssuesSortProperty = createSelector(
  [getIssuesSort],
  sort => sort.property,
);

export const getIssuesSortDir = createSelector(
  [getIssuesSort],
  sort => sort.direction,
);

export const getSortStringValue = createSelector(
  [getIssuesSortProperty, getIssuesSortDir],
  (prop, dir) => `${prop}:${dir}`,
);
