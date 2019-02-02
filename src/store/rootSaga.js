import { sagas as auth } from 'modules/auth';
import { sagas as repos } from 'modules/repos';

export default function* rootSaga() {
  yield [
    auth(),
    repos(),
  ];
}
