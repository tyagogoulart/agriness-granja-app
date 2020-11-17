import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { removeTokens, storeAccessToken, storeRefreshToken } from '../../../services/storage';
import { EmailValidation } from '../../../validations/validators/email/email-validation';
import { MinLengthValidation } from '../../../validations/validators/min-length/min-length-validation';
import { RequiredFieldValidation } from '../../../validations/validators/required-field/required-field-validation';
import {
  LogInFailure,
  LogInSuccess,
  LogOutFailure,
  LogOutSuccess,
  SetLoginCredentialFailure,
  SetLoginCredentialSuccess,
  UpdateAuthenticatedFailure,
  UpdateAuthenticatedSuccess,
  validateEmailFailure,
  validateEmailSuccess,
  validatePasswordMinLengthFailure,
  validatePasswordMinLengthSuccess,
  validateRequiredFieldFailure,
  validateRequiredFieldSuccess,
} from './actions';
import {
  LogInRequestAction,
  AuthTypes,
  UpdateAuthenticatedRequestAction,
  SetLoginCredentialRequestAction,
  validatePasswordMinLengthRequestAction,
  validateRequiredFieldRequestAction,
  validateEmailRequestAction,
} from './types';

export function* LogIn({ payload }: LogInRequestAction) {
  try {
    const apiCall = () => {
      return api.post('/token/', payload);
    };

    const { data } = yield call(apiCall);
    yield call(storeAccessToken, data.access);
    yield call(storeRefreshToken, data.refresh);

    yield put(LogInSuccess({ isAuthenticated: true }));
  } catch ({ response }) {
    yield put(
      LogInFailure({
        status: response.status,
        email: response.data.email,
        password: response.data.password,
        detail: response.data.detail,
      })
    );
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

export function* SetLoginCredential({ payload }: SetLoginCredentialRequestAction) {
  try {
    yield put(SetLoginCredentialSuccess(payload.field, payload.value));
  } catch (error) {
    yield put(SetLoginCredentialFailure(error));
  }
}

export function* validatePasswordMinLength({ payload }: validatePasswordMinLengthRequestAction) {
  try {
    const error = new MinLengthValidation('password', payload.minLength).validate(payload.value);
    if (error) throw error;

    yield put(validatePasswordMinLengthSuccess());
  } catch (error) {
    yield put(validatePasswordMinLengthFailure(error.message));
  }
}

export function* validateRequiredField({ payload }: validateRequiredFieldRequestAction) {
  try {
    const error = new RequiredFieldValidation(payload.field).validate(payload.value);
    if (error) throw error;

    yield put(validateRequiredFieldSuccess());
  } catch (error) {
    yield put(validateRequiredFieldFailure(payload.field, error.message));
  }
}

export function* validateEmail({ payload }: validateEmailRequestAction) {
  try {
    const error = new EmailValidation('email').validate(payload.value);
    if (error) throw error;

    yield put(validateEmailSuccess());
  } catch (error) {
    yield put(validateEmailFailure(error.message));
  }
}

export default all([
  takeLatest(AuthTypes.LOG_IN_REQUEST, LogIn),
  takeLatest(AuthTypes.LOG_OUT_REQUEST, LogOut),
  takeLatest(AuthTypes.UPDATE_AUTHENTICATED_REQUEST, UpdateAuthenticated),
  takeLatest(AuthTypes.SET_LOGIN_CREDENTIAL_REQUEST, SetLoginCredential),
  takeLatest(AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_REQUEST, validatePasswordMinLength),
  takeLatest(AuthTypes.VALIDATE_REQUIRED_FIELD_REQUEST, validateRequiredField),
  takeLatest(AuthTypes.VALIDATE_EMAIL_REQUEST, validateEmail),
]);
