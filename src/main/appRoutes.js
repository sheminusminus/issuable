import { Auth } from 'modules/auth/components';
import { RepoSelect } from 'modules/repos/components';

export default [
  {
    path: '/repos',
    key: 'repo-route',
    component: RepoSelect,
  },
  {
    path: '/',
    key: 'auth-route',
    component: Auth,
  },
];
