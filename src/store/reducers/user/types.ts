import { Granja } from '../granja/types';

export enum UserTypes {
  GET_ACTIVE_USER_REQUEST = 'user/GET_ACTIVE_USER_REQUEST',
  GET_ACTIVE_USER_SUCCESS = 'user/GET_ACTIVE_USER_SUCCESS',
  GET_ACTIVE_USER_FAILURE = 'user/GET_ACTIVE_USER_FAILURE',
  LIST_USER_GRANJAS_REQUEST = 'user/LIST_USER_GRANJAS_REQUEST',
  LIST_USER_GRANJAS_SUCCESS = 'user/LIST_USER_GRANJAS_SUCCESS',
  LIST_USER_GRANJAS_FAILURE = 'user/LIST_USER_GRANJAS_FAILURE',
}

export interface Error {
  message: string;
  status: number;
}

export interface User {
  id: number | null;
  nome: string;
  email: string;
}

export interface UserState {
  readonly activeUser: User;
  readonly granjas: Granja[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export interface GetActiveUserRequestAction {
  type: typeof UserTypes.GET_ACTIVE_USER_REQUEST;
}

export interface GetActiveUserSuccessAction {
  type: typeof UserTypes.GET_ACTIVE_USER_SUCCESS;
  payload: User;
}

export interface GetActiveUserFailureAction {
  type: typeof UserTypes.GET_ACTIVE_USER_FAILURE;
  payload: Error;
}

export interface ListUserGranjasRequestAction {
  type: typeof UserTypes.LIST_USER_GRANJAS_REQUEST;
}

export interface ListUserGranjasSuccessAction {
  type: typeof UserTypes.LIST_USER_GRANJAS_SUCCESS;
  payload: Granja[];
}

export interface ListUserGranjasFailureAction {
  type: typeof UserTypes.LIST_USER_GRANJAS_FAILURE;
  payload: Error;
}

export type UserActionTypes =
  | GetActiveUserRequestAction
  | GetActiveUserSuccessAction
  | GetActiveUserFailureAction
  | ListUserGranjasRequestAction
  | ListUserGranjasSuccessAction
  | ListUserGranjasFailureAction;
