import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import appRoutes from './appRoutes';

import { Routes } from './components';

import './styles.scss';

class Main extends Component {
  render() {
    const { store, persistor } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="main">
            <Routes config={appRoutes} />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default Main;
