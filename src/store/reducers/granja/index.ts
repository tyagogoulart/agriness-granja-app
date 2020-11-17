import { Reducer } from 'redux';

import { GranjaState } from './protocols/granja-state';
import { GranjaActionTypes, GranjaTypes } from './types';

const initialState: GranjaState = {
  locations: [],
  animals: [],
  filters: {
    name: '',
    location: '',
  },
  isLoading: false,
  pagination: {
    maxPage: 1,
    page: 1,
    shouldFetchMore: false,
  },
  error: null,
  success: '',
};

const reducer: Reducer<GranjaState, GranjaActionTypes> = (
  state = initialState,
  action
): GranjaState => {
  switch (action.type) {
    case GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST:
      return { ...state, isLoading: true, error: null, success: '' };
    case GranjaTypes.LIST_GRANJA_ANIMALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        animals: action.payload.animals,
        pagination: action.payload.pagination,
      };
    case GranjaTypes.LIST_GRANJA_ANIMALS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, animals: [] };
    case GranjaTypes.LIST_GRANJA_LOCATIONS_REQUEST:
      return { ...state, isLoading: true, error: null, locations: [], success: '' };
    case GranjaTypes.LIST_GRANJA_LOCATIONS_SUCCESS:
      return { ...state, isLoading: false, error: null, locations: action.payload };
    case GranjaTypes.LIST_GRANJA_LOCATIONS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, locations: [] };
    case GranjaTypes.DELETE_GRANJA_ANIMAL_REQUEST:
      return { ...state, isLoading: true, error: null, success: '' };
    case GranjaTypes.DELETE_GRANJA_ANIMAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        animals: state.animals.filter((animal) => animal.id !== action.payload.animalId),
        success: 'Animal deletado com sucesso!',
      };
    case GranjaTypes.DELETE_GRANJA_ANIMAL_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_REQUEST:
      return { ...state, isLoading: true, error: null, success: '' };
    case GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        animals: state.animals.map((animal) =>
          animal.id === action.payload.id ? action.payload : animal
        ),
        success: 'Animal atualizado com sucesso!',
      };
    case GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GranjaTypes.FILTER_GRANJA_ANIMALS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: '',
        pagination: initialState.pagination,
      };
    case GranjaTypes.FILTER_GRANJA_ANIMALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        filters: { ...state.filters, [action.payload.field]: action.payload.value },
      };
    case GranjaTypes.FILTER_GRANJA_ANIMALS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, filters: initialState.filters };
    case GranjaTypes.PAGINATE_GRANJA_ANIMALS_REQUEST:
      return { ...state, isLoading: true, error: null, success: '' };
    case GranjaTypes.PAGINATE_GRANJA_ANIMALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        animals: [...state.animals, ...action.payload.animals],
        pagination: action.payload.pagination,
      };
    case GranjaTypes.PAGINATE_GRANJA_ANIMALS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, animals: [] };
    case GranjaTypes.SHOULD_FETCH_MORE_ANIMALS:
      return { ...state, pagination: { ...state.pagination, shouldFetchMore: action.payload } };
    case GranjaTypes.CLEAN_SUCCESS_MESSAGE:
      return { ...state, success: '' };
    default:
      return state;
  }
};

export default reducer;
