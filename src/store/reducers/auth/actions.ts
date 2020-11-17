import { Credentials } from './protocols/credentials';
import { Error } from './protocols/error';
import { AuthActionTypes, AuthTypes } from './types';

export function LogInRequest(credentials: Credentials): AuthActionTypes {
  return {
    type: AuthTypes.LOG_IN_REQUEST,
    payload: credentials,
  };
}

export function LogInSuccess({ isAuthenticated }: { isAuthenticated: boolean }): AuthActionTypes {
  return {
    type: AuthTypes.LOG_IN_SUCCESS,
    payload: { isAuthenticated },
  };
}

export function LogInFailure(error: Error): AuthActionTypes {
  return {
    type: AuthTypes.LOG_IN_FAILURE,
    payload: error,
  };
}

export function LogOutRequest(): AuthActionTypes {
  return {
    type: AuthTypes.LOG_OUT_REQUEST,
  };
}

export function LogOutSuccess({ isAuthenticated }: { isAuthenticated: boolean }): AuthActionTypes {
  return {
    type: AuthTypes.LOG_OUT_SUCCESS,
    payload: { isAuthenticated },
  };
}

export function LogOutFailure(error: Error): AuthActionTypes {
  return {
    type: AuthTypes.LOG_OUT_FAILURE,
    payload: error,
  };
}

export function UpdateAuthenticatedRequest({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}): AuthActionTypes {
  return {
    type: AuthTypes.UPDATE_AUTHENTICATED_REQUEST,
    payload: { isAuthenticated },
  };
}

export function UpdateAuthenticatedSuccess({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}): AuthActionTypes {
  return {
    type: AuthTypes.UPDATE_AUTHENTICATED_SUCCESS,
    payload: { isAuthenticated },
  };
}

export function UpdateAuthenticatedFailure(error: Error): AuthActionTypes {
  return {
    type: AuthTypes.UPDATE_AUTHENTICATED_FAILURE,
    payload: error,
  };
}

export function SetLoginCredentialRequest(field: string, value: string): AuthActionTypes {
  return {
    type: AuthTypes.SET_LOGIN_CREDENTIAL_REQUEST,
    payload: { field, value },
  };
}

export function SetLoginCredentialSuccess(field: string, value: string): AuthActionTypes {
  return {
    type: AuthTypes.SET_LOGIN_CREDENTIAL_SUCCESS,
    payload: { field, value },
  };
}

export function SetLoginCredentialFailure(error: Error): AuthActionTypes {
  return {
    type: AuthTypes.SET_LOGIN_CREDENTIAL_FAILURE,
    payload: error,
  };
}

export function validatePasswordMinLengthRequest(
  value: string,
  minLength: number
): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_REQUEST,
    payload: { value, minLength },
  };
}

export function validatePasswordMinLengthSuccess(): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_SUCCESS,
  };
}

export function validatePasswordMinLengthFailure(message: string): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_FAILURE,
    payload: { message },
  };
}

export function validateRequiredFieldRequest(field: string, value: string): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_REQUIRED_FIELD_REQUEST,
    payload: { field, value },
  };
}

export function validateRequiredFieldSuccess(): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_REQUIRED_FIELD_SUCCESS,
  };
}

export function validateRequiredFieldFailure(field: string, message: string): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_REQUIRED_FIELD_FAILURE,
    payload: { field, message },
  };
}

export function validateEmailRequest(value: string): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_EMAIL_REQUEST,
    payload: { value },
  };
}

export function validateEmailSuccess(): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_EMAIL_SUCCESS,
  };
}

export function validateEmailFailure(message: string): AuthActionTypes {
  return {
    type: AuthTypes.VALIDATE_EMAIL_FAILURE,
    payload: { message },
  };
}
