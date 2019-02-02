import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = ({ config = [] }) => (
  <Switch>
    {config.map(item => (
      <Route
        component={item.component}
        key={item.key}
        path={item.path} />
    ))}
  </Switch>
);

export default Routes;
