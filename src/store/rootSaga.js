import { all } from 'redux-saga/effects'

import auth from 'modules/auth/sagas';
import repos from 'modules/repos/sagas';

export default function* rootSaga() {
  yield all([
    auth(),
    repos(),
  ]);
}
