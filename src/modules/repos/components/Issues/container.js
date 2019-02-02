import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors, actions } from '../..';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  issues: selectors.getIssues,
  fetchingIssues: selectors.getFetchingIssues,
});

const mapDispatchToProps = {
  requestIssues: actions.requestIssues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
