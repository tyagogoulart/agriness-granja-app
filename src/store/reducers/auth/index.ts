import { Reducer } from 'redux';

import { AuthState } from './protocols/auth-state';
import { AuthActionTypes, AuthTypes } from './types';

export const initialState: AuthState = {
  credentials: {
    email: '',
    password: '',
  },
  isAuthenticated: false,
  isLoading: true,
  error: {
    email: '',
    password: '',
    detail: '',
    status: null,
  },
};

const reducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AuthTypes.LOG_IN_REQUEST:
      return { ...state, isLoading: true };
    case AuthTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
        isAuthenticated: action.payload.isAuthenticated,
        credentials: initialState.credentials,
      };
    case AuthTypes.LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AuthTypes.LOG_OUT_REQUEST:
      return { ...state, isLoading: true };
    case AuthTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case AuthTypes.LOG_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AuthTypes.UPDATE_AUTHENTICATED_REQUEST:
      return { ...state, isLoading: true };
    case AuthTypes.UPDATE_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case AuthTypes.UPDATE_AUTHENTICATED_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AuthTypes.SET_LOGIN_CREDENTIAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthTypes.SET_LOGIN_CREDENTIAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
        credentials: { ...state.credentials, [action.payload.field]: action.payload.value },
      };
    case AuthTypes.SET_LOGIN_CREDENTIAL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
      };
    case AuthTypes.VALIDATE_PASSWORD_MIN_LENGTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: { ...state.error, password: action.payload.message },
      };
    case AuthTypes.VALIDATE_REQUIRED_FIELD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthTypes.VALIDATE_REQUIRED_FIELD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
      };
    case AuthTypes.VALIDATE_REQUIRED_FIELD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: { ...state.error, [action.payload.field]: action.payload.message },
      };
    case AuthTypes.VALIDATE_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthTypes.VALIDATE_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
      };
    case AuthTypes.VALIDATE_EMAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: { ...state.error, email: action.payload.message },
      };
    default:
      return state;
  }
};

export default reducer;
