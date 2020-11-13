import { all } from 'redux-saga/effects';

import AuthSaga from './auth/sagas';
import GranjaSaga from './granja/sagas';
import UserSaga from './user/sagas';

export default function* rootSaga() {
  return yield all([AuthSaga, UserSaga, GranjaSaga]);
}
