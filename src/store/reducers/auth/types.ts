import { Credentials } from './protocols/credentials';
import { Error } from './protocols/error';

export enum AuthTypes {
  LOG_IN_REQUEST = 'auth/LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'auth/LOG_IN_SUCCESS',
  LOG_IN_FAILURE = 'auth/LOG_IN_FAILURE',
  LOG_OUT_REQUEST = 'auth/LOG_OUT_REQUEST',
  LOG_OUT_SUCCESS = 'auth/LOG_OUT_SUCCESS',
  LOG_OUT_FAILURE = 'auth/LOG_OUT_FAILURE',
  UPDATE_AUTHENTICATED_REQUEST = 'auth/UPDATE_AUTHENTICATED_REQUEST',
  UPDATE_AUTHENTICATED_SUCCESS = 'auth/UPDATE_AUTHENTICATED_SUCCESS',
  UPDATE_AUTHENTICATED_FAILURE = 'auth/UPDATE_AUTHENTICATED_FAILURE',
  SET_LOGIN_CREDENTIAL_REQUEST = 'auth/SET_LOGIN_CREDENTIAL_REQUEST',
  SET_LOGIN_CREDENTIAL_SUCCESS = 'auth/SET_LOGIN_CREDENTIAL_SUCCESS',
  SET_LOGIN_CREDENTIAL_FAILURE = 'auth/SET_LOGIN_CREDENTIAL_FAILURE',
  VALIDATE_PASSWORD_MIN_LENGTH_REQUEST = 'auth/VALIDATE_PASSWORD_MIN_LENGTH_REQUEST',
  VALIDATE_PASSWORD_MIN_LENGTH_SUCCESS = 'auth/VALIDATE_PASSWORD_MIN_LENGTH_SUCCESS',
  VALIDATE_PASSWORD_MIN_LENGTH_FAILURE = 'auth/VALIDATE_PASSWORD_MIN_LENGTH_FAILURE',
  VALIDATE_REQUIRED_FIELD_REQUEST = 'auth/VALIDATE_REQUIRED_FIELD_REQUEST',
  VALIDATE_REQUIRED_FIELD_SUCCESS = 'auth/VALIDATE_REQUIRED_FIELD_SUCCESS',
  VALIDATE_REQUIRED_FIELD_FAILURE = 'auth/VALIDATE_REQUIRED_FIELD_FAILURE',
  VALIDATE_EMAIL_REQUEST = 'auth/VALIDATE_EMAIL_REQUEST',
  VALIDATE_EMAIL_SUCCESS = 'auth/VALIDATE_EMAIL_SUCCESS',
  VALIDATE_EMAIL_FAILURE = 'auth/VALIDATE_EMAIL_FAILURE',
}

export interface LogInRequestAction {
  type: typeof AuthTypes.LOG_IN_REQUEST;
  payload: Credentials;
}

interface LogInSuccessAction {
  type: typeof AuthTypes.LOG_IN_SUCCESS;
  payload: { isAuthenticated: boolean };
}

interface LogInFailureAction {
  type: typeof AuthTypes.LOG_IN_FAILURE;
  payload: Error;
}

interface LogOutRequestAction {
  type: typeof AuthTypes.LOG_OUT_REQUEST;
}

interface LogOutSuccessAction {
  type: typeof AuthTypes.LOG_OUT_SUCCESS;
  payload: { isAuthenticated: boolean };
}

interface LogOutFailureAction {
  type: typeof AuthTypes.LOG_OUT_FAILURE;
  payload: Error;
}

export interface UpdateAuthenticatedRequestAction {
  type: typeof AuthTypes.UPDATE_AUTHENTICATED_REQUEST;
  payload: { isAuthenticated: boolean };
}

interface UpdateAuthenticatedSuccessAction {
  type: typeof AuthTypes.UPDATE_AUTHENTICATED_SUCCESS;
  payload: { isAuthenticated: boolean };
}

interface UpdateAuthenticatedFailureAction {
  type: typeof AuthTypes.UPDATE_AUTHENTICATED_FAILURE;
  payload: Error;
}

export interface SetLoginCredentialRequestAction {
  type: typeof AuthTypes.SET_LOGIN_CREDENTIAL_REQUEST;
  payload: { field: string; value: string };
}

interface SetLoginCredentialSuccessAction {
  type: typeof AuthTypes.SET_LOGIN_CREDENTIAL_SUCCESS;
  payload: { field: string; value: string };
}

interface SetLoginCredentialFailureAction {
  type: typeof AuthTypes.SET_LOGIN_CREDENTIAL_FAILURE;
  payload: Error;
}

export interface validatePasswordMinLengthRequestAction {
  type: typeof AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_REQUEST;
  payload: { value: string; minLength: number };
}

interface validatePasswordMinLengthSuccessAction {
  type: typeof AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_SUCCESS;
}

interface validatePasswordMinLengthFailureAction {
  type: typeof AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_FAILURE;
  payload: { message: string };
}

export interface validateRequiredFieldRequestAction {
  type: typeof AuthTypes.VALIDATE_REQUIRED_FIELD_REQUEST;
  payload: { field: string; value: string };
}

interface validateRequiredFieldSuccessAction {
  type: typeof AuthTypes.VALIDATE_REQUIRED_FIELD_SUCCESS;
}

interface validateRequiredFieldFailureAction {
  type: typeof AuthTypes.VALIDATE_REQUIRED_FIELD_FAILURE;
  payload: { field: string; message: string };
}

export interface validateEmailRequestAction {
  type: typeof AuthTypes.VALIDATE_EMAIL_REQUEST;
  payload: { value: string };
}

interface validateEmailSuccessAction {
  type: typeof AuthTypes.VALIDATE_EMAIL_SUCCESS;
}

interface validateEmailFailureAction {
  type: typeof AuthTypes.VALIDATE_EMAIL_FAILURE;
  payload: { message: string };
}

export type AuthActionTypes =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | LogOutRequestAction
  | LogOutSuccessAction
  | LogOutFailureAction
  | UpdateAuthenticatedRequestAction
  | UpdateAuthenticatedSuccessAction
  | UpdateAuthenticatedFailureAction
  | SetLoginCredentialRequestAction
  | SetLoginCredentialSuccessAction
  | SetLoginCredentialFailureAction
  | validatePasswordMinLengthRequestAction
  | validatePasswordMinLengthSuccessAction
  | validatePasswordMinLengthFailureAction
  | validateRequiredFieldRequestAction
  | validateRequiredFieldSuccessAction
  | validateRequiredFieldFailureAction
  | validateEmailRequestAction
  | validateEmailSuccessAction
  | validateEmailFailureAction;
