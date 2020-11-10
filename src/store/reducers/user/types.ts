import { Granja } from '../granja/types';

export const GET_ACTIVE_USER = 'user/GET_ACTIVE_USER';
export const LIST_USER_GRANJAS = 'user/LIST_USER_GRANJAS';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  user: User;
  granjas: Granja[];
}

interface GetActiveUserAction {
  type: typeof GET_ACTIVE_USER;
  payload: User;
}

interface ListUserGranjasAction {
  type: typeof LIST_USER_GRANJAS;
  payload: Granja[];
}

export type UserActionTypes = GetActiveUserAction | ListUserGranjasAction;
