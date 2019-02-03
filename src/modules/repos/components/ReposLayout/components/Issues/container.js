import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import _ from 'lodash';

import { selectors, actions } from 'modules/repos';

import {
  selectors as uiSelectors,
  actions as uiActions,
} from 'modules/ui';

import presenter from './presenter';

// =======
// container-specific selectors
// =======

// get own props
const getProps = (state, props) => props;

// get route id param
const getIdParam = createSelector(
  [getProps],
  props => props.match.params.id,
);

// pre-sorted issues
const getSortedIssues = createSelector(
  [
    selectors.getIssues,
    getIdParam,
    uiSelectors.getIssuesSortProperty,
    uiSelectors.getIssuesSortDir,
  ],
  (issues, idParam, prop, dir) => {
    if (issues && idParam) {
      const repoIssues = issues[idParam] || [];
      return _.orderBy(repoIssues, [prop], [dir]);
    }

    return [];
  },
);

const getSelectedRepoName = createSelector(
  [selectors.getRepos, getIdParam],
  (repos, idParam) => {
    if (repos[idParam]) return repos[idParam].name;
    return '';
  },
);

const mapStateToProps = createStructuredSelector({
  issues: getSortedIssues,
  fetchingIssues: selectors.getFetchingIssues,
  idParam: getIdParam,
  sortStringValue: uiSelectors.getSortStringValue,
  repoName: getSelectedRepoName,
  issuesOrder: uiSelectors.getIssuesOrder,
});

const mapDispatchToProps = {
  requestIssues: actions.requestIssues,
  setIssuesSort: uiActions.setIssuesSort,
  setIssuesOrder: uiActions.setIssuesOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
