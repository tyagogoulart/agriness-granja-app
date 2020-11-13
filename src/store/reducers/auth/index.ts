import { Reducer } from 'redux';

import { AuthActionTypes, AuthState, AuthTypes } from './types';

const initialState: AuthState = {
  credentials: {
    email: '',
    password: '',
  },
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const reducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AuthTypes.LOG_IN_REQUEST:
      return { ...state, isLoading: true, error: null, credentials: initialState.credentials };
    case AuthTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case AuthTypes.LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        credentials: initialState.credentials,
      };
    case AuthTypes.LOG_OUT_REQUEST:
      return { ...state, isLoading: true, error: null, credentials: initialState.credentials };
    case AuthTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case AuthTypes.LOG_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        credentials: initialState.credentials,
      };
    case AuthTypes.UPDATE_AUTHENTICATED_REQUEST:
      return { ...state, isLoading: true, error: null, credentials: initialState.credentials };
    case AuthTypes.UPDATE_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case AuthTypes.UPDATE_AUTHENTICATED_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        credentials: initialState.credentials,
      };
    default:
      return state;
  }
};

export default reducer;
