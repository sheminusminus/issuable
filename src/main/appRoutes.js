import { Auth } from 'modules/auth/components';
import { ReposLayout } from 'modules/repos/components';

export default [
  {
    path: '/repos',
    key: 'repo-route',
    component: ReposLayout,
  },
  {
    path: '/',
    key: 'auth-route',
    component: Auth,
  },
];
