import React from 'react';
import { Route } from 'react-router-dom';

import { CardPanel } from 'modules/core/components';

import { Issues, RepoSelect } from './components';

const ReposLayout = () => (
  <div className="repos container">
    <Route path="/repos" component={RepoSelect} />
    <Route path="/repos/:id" component={Issues} />
  </div>
);

export default ReposLayout;
