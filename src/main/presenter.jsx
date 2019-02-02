import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import appRoutes from './appRoutes';

import {
  Layout,
  Routes,
} from './components';

class Main extends Component {
  render() {
    const { store, persistor } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <Routes config={appRoutes} />
          </Layout>
        </PersistGate>
      </Provider>
    );
  }
}

export default Main;
