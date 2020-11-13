import { Reducer } from 'redux';

import { GranjaState, GranjaActionTypes, GranjaTypes } from './types';

const initialState: GranjaState = {
  locations: [],
  animals: [],
  isLoading: false,
  error: null,
};

const reducer: Reducer<GranjaState, GranjaActionTypes> = (
  state = initialState,
  action
): GranjaState => {
  switch (action.type) {
    case GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST:
      return { ...state, isLoading: true, error: null, animals: [] };
    case GranjaTypes.LIST_GRANJA_ANIMALS_SUCCESS:
      return { ...state, isLoading: false, error: null, animals: action.payload };
    case GranjaTypes.LIST_GRANJA_ANIMALS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, animals: [] };
    case GranjaTypes.LIST_GRANJA_LOCATIONS_REQUEST:
      return { ...state, isLoading: true, error: null, locations: [] };
    case GranjaTypes.LIST_GRANJA_LOCATIONS_SUCCESS:
      return { ...state, isLoading: false, error: null, locations: action.payload };
    case GranjaTypes.LIST_GRANJA_LOCATIONS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, locations: [] };
    case GranjaTypes.DELETE_GRANJA_ANIMAL_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GranjaTypes.DELETE_GRANJA_ANIMAL_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case GranjaTypes.DELETE_GRANJA_ANIMAL_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        animals: state.animals.map((animal) =>
          animal.id === action.payload.id ? action.payload : animal
        ),
      };
    case GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
