import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  getActiveUserFailure,
  getActiveUserSuccess,
  listUserGranjasFailure,
  listUserGranjasSuccess,
} from './actions';
import { UserTypes } from './types';

export function* getActiveUser() {
  try {
    const apiCall = () => {
      return api.get('/usuarios/perfil/');
    };

    const { data } = yield call(apiCall);
    yield put(getActiveUserSuccess(data));
  } catch (error) {
    yield put(getActiveUserFailure(error));
  }
}

export function* listUserGranjas() {
  try {
    const apiCall = () => {
      return api.get('/granjas/');
    };

    const { data } = yield call(apiCall);
    yield put(listUserGranjasSuccess(data.results));
  } catch (error) {
    yield put(listUserGranjasFailure(error));
  }
}

export default all([
  takeLatest(UserTypes.LIST_USER_GRANJAS_REQUEST, listUserGranjas),
  takeLatest(UserTypes.GET_ACTIVE_USER_REQUEST, getActiveUser),
]);
