import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors, actions } from '../../../../index';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  repos: selectors.getRepos,
  fetchingRepos: selectors.getFetchingRepos,
});

const mapDispatchToProps = {
  requestRepos: actions.requestRepos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
