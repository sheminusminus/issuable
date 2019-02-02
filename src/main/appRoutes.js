import { Routing } from 'config';

import { Auth } from 'modules/auth/components';
import { ReposLayout } from 'modules/repos/components';

export default [
  {
    path: Routing.clientRepos(),
    key: 'repo-route',
    component: ReposLayout,
  },
  {
    path: Routing.clientHome(),
    key: 'auth-route',
    component: Auth,
  },
];
