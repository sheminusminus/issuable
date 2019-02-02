import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './styles.scss';

class Main extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="main">
          Now I am the app!
        </div>
      </Provider>
    );
  }
}

export default Main;
