import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = ({ config = [] }) => (
  <Router>
    <Switch>
      {config.map(item => (
        <Route
          component={item.component}
          key={item.key}
          path={item.path} />
      ))}
    </Switch>
  </Router>
);

export default Routes;
