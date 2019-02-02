import { take } from 'redux-saga/effects';

/**
 *  Generator function to listen for redux actions
 */
function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([]);

    switch (type) {
      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
