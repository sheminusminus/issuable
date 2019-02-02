import React, { Component } from 'react';
import _ from 'lodash';

import {
  Button,
  TextField,
} from 'modules/core/components';

import './styles.scss';

class Auth extends Component {
  state = {
    token: '',
  };

  componentDidMount() {
    const { token } = this.props;

    // if we have a previous token saved in the redux state,
    // use it; otherwise it's a clean slate
    if (token && token.length) {
      this.setState({ token });
    }
  }

  syncState = () => {
    const { saveToken } = this.props;
    const { token } = this.state;

    saveToken(token);
  };

  // we'll sync state to redux occasionally,
  // but no reason to do this on every keystroke,
  // so just debounce it
  debouncedSyncState = _.debounce(this.syncState, 100);

  handleFieldChange = (evt) => {
    const { target: { value } } = evt;

    this.setState({ token: value }, () => {
      // will sync with redux state at most every 100ms
      this.debouncedSyncState(this.state.token);
    });
  };

  handleDone = () => {
    const { history } = this.props;

    history.push('/repos');
  };

  render() {
    const { token } = this.state;

    return (
      <div className="auth">
        <TextField
          value={token}
          name="token"
          onChange={this.handleFieldChange} />

        <Button
          onClick={this.handleDone}>
          Okay Go
        </Button>
      </div>
    );
  }
}

export default Auth;
