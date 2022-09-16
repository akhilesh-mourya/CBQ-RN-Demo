// @flow

import { userSaga } from '../modules';
import { spawn } from 'redux-saga/effects';

function* sagas() {
  yield spawn(userSaga);
}

export default sagas;
