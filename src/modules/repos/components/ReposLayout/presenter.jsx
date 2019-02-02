import React from 'react';
import { Route } from 'react-router-dom';

import { Issues, RepoSelect } from './components';

const ReposLayout = () => (
  <div className="repos">
    <Route path="/repos" component={RepoSelect} />
    <Route path="/repos/:id" component={Issues} />
  </div>
);

export default ReposLayout;
