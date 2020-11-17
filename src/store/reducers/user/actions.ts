import { Granja } from '../granja/protocols/granja';
import { Error } from './protocols/error';
import { User } from './protocols/user';
import { UserActionTypes, UserTypes } from './types';

export function getActiveUserRequest(): UserActionTypes {
  return {
    type: UserTypes.GET_ACTIVE_USER_REQUEST,
  };
}

export function getActiveUserSuccess(user: User): UserActionTypes {
  return {
    type: UserTypes.GET_ACTIVE_USER_SUCCESS,
    payload: user,
  };
}

export function getActiveUserFailure(error: Error): UserActionTypes {
  return {
    type: UserTypes.GET_ACTIVE_USER_FAILURE,
    payload: error,
  };
}

export function listUserGranjasRequest(): UserActionTypes {
  return {
    type: UserTypes.LIST_USER_GRANJAS_REQUEST,
  };
}

export function listUserGranjasSuccess(granjas: Granja[]): UserActionTypes {
  return {
    type: UserTypes.LIST_USER_GRANJAS_SUCCESS,
    payload: granjas,
  };
}

export function listUserGranjasFailure(error: Error): UserActionTypes {
  return {
    type: UserTypes.LIST_USER_GRANJAS_FAILURE,
    payload: error,
  };
}
