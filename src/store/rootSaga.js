import { sagas as auth } from 'modules/auth';

export default function* rootSaga() {
  yield [
    auth(),
  ];
}
