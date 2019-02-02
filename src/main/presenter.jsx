import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
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
          <Router>
            <Layout>
              <Routes config={appRoutes} />
            </Layout>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default Main;
