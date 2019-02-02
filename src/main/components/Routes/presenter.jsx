import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = ({ config = [] }) => (
  <Router>
    <div>
      {config.map(item => (
        <Route
          component={item.component}
          exact={item.exact}
          key={item.key}
          path={item.path} />
      ))}
    </div>
  </Router>
);

export default Routes;
