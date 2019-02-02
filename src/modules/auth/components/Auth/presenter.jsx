import React, { Component } from 'react';

import { TextField } from 'modules/core/components';

import './styles.scss';

class Auth extends Component {
  state = {
    token: '',
  };

  handleFieldChange = (evt) => {
    const { target: { value } } = evt;
    this.setState({ token: value });
  };

  render() {
    const { token } = this.state;

    return (
      <div className="auth">
        <TextField
          value={token}
          name="token"
          onChange={this.handleFieldChange} />
      </div>
    );
  }
}

export default Auth;
