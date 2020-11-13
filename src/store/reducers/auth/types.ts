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
}

export interface Error {
  message: string;
  status: number;
}

export type LogInTypes = {
  email: string;
  password: string;
};

export interface AuthState {
  readonly credentials: LogInTypes;
  readonly isAuthenticated: boolean;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export interface LogInRequestAction {
  type: typeof AuthTypes.LOG_IN_REQUEST;
  payload: LogInTypes;
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

export type AuthActionTypes =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | LogOutRequestAction
  | LogOutSuccessAction
  | LogOutFailureAction
  | UpdateAuthenticatedRequestAction
  | UpdateAuthenticatedSuccessAction
  | UpdateAuthenticatedFailureAction;
