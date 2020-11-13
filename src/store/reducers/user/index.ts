import { Reducer } from 'redux';

import { UserActionTypes, UserState, UserTypes } from './types';

const initialState: UserState = {
  activeUser: {
    id: null,
    nome: '',
    email: '',
  },
  isLoading: false,
  error: null,
  granjas: [],
};

const reducer: Reducer<UserState, UserActionTypes> = (state = initialState, action): UserState => {
  switch (action.type) {
    case UserTypes.LIST_USER_GRANJAS_REQUEST:
      return { ...state, isLoading: true, error: null, granjas: [] };
    case UserTypes.LIST_USER_GRANJAS_SUCCESS:
      return { ...state, isLoading: false, error: null, granjas: action.payload };
    case UserTypes.LIST_USER_GRANJAS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, granjas: [] };
    case UserTypes.GET_ACTIVE_USER_REQUEST:
      return { ...state, isLoading: true, error: null, activeUser: initialState.activeUser };
    case UserTypes.GET_ACTIVE_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, activeUser: action.payload };
    case UserTypes.GET_ACTIVE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        activeUser: initialState.activeUser,
      };
    default:
      return state;
  }
};

export default reducer;
