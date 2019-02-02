import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors, actions } from '../..';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  token: selectors.getToken,
});

const mapDispatchToProps = {
  saveToken: actions.saveToken,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
