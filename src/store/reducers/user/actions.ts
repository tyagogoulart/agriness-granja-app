import { Granja } from '../granja/types';
import { GET_ACTIVE_USER, LIST_USER_GRANJAS, User, UserActionTypes } from './types';

export function getActiveUser(user: User): UserActionTypes {
  return {
    type: GET_ACTIVE_USER,
    payload: user,
  };
}

export function listUserGranjas(granjas: Granja[]): UserActionTypes {
  return {
    type: LIST_USER_GRANJAS,
    payload: granjas,
  };
}
