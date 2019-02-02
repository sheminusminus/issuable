import React from 'react';
import { Route } from 'react-router-dom';

import { Routing } from 'config';

import { scrollsToTop } from 'modules/core/hoc';

import { Issues, RepoSelect } from './components';

const ReposLayout = () => (
  <div className="repos container">
    <Route path={Routing.clientRepos()} component={RepoSelect} />
    <Route path={Routing.clientRepoIssues()} component={Issues} />
  </div>
);

export default scrollsToTop(ReposLayout);
