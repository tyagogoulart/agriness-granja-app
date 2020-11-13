import { AuthActionTypes, AuthTypes, Error, LogInTypes } from './types';

export function LogInRequest(credentials: LogInTypes): AuthActionTypes {
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
