import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './styles.scss';

class Main extends Component {
  render() {
    const { store, persistor } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="main">
            Now I am the app!
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default Main;
