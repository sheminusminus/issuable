import React, { Component } from 'react';
import _ from 'lodash';

import { Routing } from 'config';

import {
  Button,
  TextField,
  CardPanel,
} from 'modules/core/components';

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

  handleKeyDown = (evt) => {
    const { key } = evt;
    if (key === 'Enter') this.handleDone();
  };

  handleDone = () => {
    const { history } = this.props;
    history.push(Routing.clientRepos());
  };

  render() {
    const { token } = this.state;

    return (
      <div className="auth container grid center-kids align-kids-md">
        <CardPanel className="column bigger shadow">
          <h5>Personal Access Token</h5>

          <TextField
            className="column"
            value={token}
            name="token"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleFieldChange} />

          <Button
            className="column primary-bg secondary-text no-bounds def-radius"
            onClick={this.handleDone}>
            Okay Go
          </Button>
        </CardPanel>
      </div>
    );
  }
}

export default Auth;
