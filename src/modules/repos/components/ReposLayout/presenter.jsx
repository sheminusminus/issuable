import React from 'react';
import { Route } from 'react-router-dom';

import { scrollsToTop } from 'modules/core/hoc';

import { Issues, RepoSelect } from './components';

const ReposLayout = () => (
  <div className="repos container">
    <Route path="/repos" component={RepoSelect} />
    <Route path="/repos/:id" component={Issues} />
  </div>
);

export default scrollsToTop(ReposLayout);
