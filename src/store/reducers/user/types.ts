import { Granja } from '../granja/protocols/granja';
import { Error } from './protocols/error';
import { User } from './protocols/user';

export enum UserTypes {
  GET_ACTIVE_USER_REQUEST = 'user/GET_ACTIVE_USER_REQUEST',
  GET_ACTIVE_USER_SUCCESS = 'user/GET_ACTIVE_USER_SUCCESS',
  GET_ACTIVE_USER_FAILURE = 'user/GET_ACTIVE_USER_FAILURE',
  LIST_USER_GRANJAS_REQUEST = 'user/LIST_USER_GRANJAS_REQUEST',
  LIST_USER_GRANJAS_SUCCESS = 'user/LIST_USER_GRANJAS_SUCCESS',
  LIST_USER_GRANJAS_FAILURE = 'user/LIST_USER_GRANJAS_FAILURE',
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
