import { Auth } from 'modules/auth/components';
import { RepoSelect } from 'modules/repos/components';

export default [
  {
    path: '/',
    key: 'auth-route',
    exact: true,
    component: Auth,
  },
  {
    path: '/repo',
    key: 'repo-route',
    exact: true,
    component: RepoSelect,
  },
];
