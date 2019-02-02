import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { selectors, actions } from '../../../../index';

import presenter from './presenter';

const getProps = (state, props) => props;
const getIdParam = createSelector(
  [getProps],
  props => props.match.params.id,
);

const mapStateToProps = createStructuredSelector({
  issues: selectors.getIssues,
  fetchingIssues: selectors.getFetchingIssues,
  idParam: getIdParam,
});

const mapDispatchToProps = {
  requestIssues: actions.requestIssues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
