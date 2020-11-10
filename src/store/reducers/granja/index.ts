import { Reducer } from 'redux';

import { GranjaState, GranjaActionTypes, GET_ACTIVE_GRANJA, LIST_GRANJA_ANIMALS } from './types';

const initialState: GranjaState = {
  granja: {
    id: 0,
    nome: '',
    responsavel: 0,
    usuarios: [],
  },
  animals: [],
};

const reducer: Reducer<GranjaState, GranjaActionTypes> = (
  state = initialState,
  action
): GranjaState => {
  switch (action.type) {
    case GET_ACTIVE_GRANJA:
      return { ...state, granja: action.payload };
    case LIST_GRANJA_ANIMALS:
      return { ...state, animals: action.payload };
    default:
      return state;
  }
};

export default reducer;
