import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors, actions } from '../..';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  repos: selectors.getRepos,
  fetchingRepos: selectors.getFetchingRepos,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);