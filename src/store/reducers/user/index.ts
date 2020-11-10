import { Reducer } from 'redux';

import { GET_ACTIVE_USER, LIST_USER_GRANJAS, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  user: {
    id: 0,
    name: '',
    email: '',
  },
  granjas: [
    {
      id: 1,
      nome: 'Granja alterada 1',
      responsavel: 2,
      usuarios: [],
    },
    {
      id: 3,
      nome: 'Granja 3',
      responsavel: 1,
      usuarios: [],
    },
  ],
};

const reducer: Reducer<UserState, UserActionTypes> = (state = initialState, action): UserState => {
  switch (action.type) {
    case GET_ACTIVE_USER:
      return { ...state, user: action.payload };
    case LIST_USER_GRANJAS:
      return { ...state, granjas: action.payload };
    default:
      return state;
  }
};

export default reducer;
