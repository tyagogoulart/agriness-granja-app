import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { removeTokens, storeAccessToken, storeRefreshToken } from '../../../services/storage';
import {
  LogInFailure,
  LogInSuccess,
  LogOutFailure,
  LogOutSuccess,
  UpdateAuthenticatedFailure,
  UpdateAuthenticatedSuccess,
} from './actions';
import { LogInRequestAction, AuthTypes, UpdateAuthenticatedRequestAction } from './types';

export function* LogIn({ payload }: LogInRequestAction) {
  try {
    const apiCall = () => {
      return api.post('/token/', payload);
    };

    const { data } = yield call(apiCall);
    console.log(data);
    yield call(storeAccessToken, data.access);
    yield call(storeRefreshToken, data.refresh);

    yield put(LogInSuccess({ isAuthenticated: true }));
  } catch (error) {
    yield put(LogInFailure(error));
  }
}

export function* LogOut() {
  try {
    yield call(removeTokens);

    yield put(LogOutSuccess({ isAuthenticated: false }));
  } catch (error) {
    yield put(LogOutFailure(error));
  }
}

export function* UpdateAuthenticated({ payload }: UpdateAuthenticatedRequestAction) {
  try {
    yield put(UpdateAuthenticatedSuccess({ isAuthenticated: payload.isAuthenticated }));
  } catch (error) {
    yield put(UpdateAuthenticatedFailure(error));
  }
}

export default all([
  takeLatest(AuthTypes.LOG_IN_REQUEST, LogIn),
  takeLatest(AuthTypes.LOG_OUT_REQUEST, LogOut),
  takeLatest(AuthTypes.UPDATE_AUTHENTICATED_REQUEST, UpdateAuthenticated),
]);
