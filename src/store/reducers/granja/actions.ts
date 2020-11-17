import { ReactText } from 'react';

import { Animal } from './protocols/animal';
import { AnimalsFilter } from './protocols/animals-filter';
import { Error } from './protocols/error';
import { Location } from './protocols/location';
import { Pagination } from './protocols/pagination';
import { GranjaActionTypes, GranjaTypes } from './types';

export function listGranjaAnimalsRequest(
  granjaId: number,
  filters: AnimalsFilter,
  page: number
): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST,
    payload: { granjaId, filters, page },
  };
}

export function listGranjaAnimalsSuccess(
  animals: Animal[],
  count: number,
  pagination: Pagination
): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_ANIMALS_SUCCESS,
    payload: {
      animals,
      count,
      pagination,
    },
  };
}

export function listGranjaAnimalsFailure(error: Error): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_ANIMALS_FAILURE,
    payload: error,
  };
}

export function listGranjaLocationsRequest(granjaId: number): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_LOCATIONS_REQUEST,
    payload: { granjaId },
  };
}

export function listGranjaLocationsSuccess(locations: Location[]): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_LOCATIONS_SUCCESS,
    payload: locations,
  };
}

export function listGranjaLocationsFailure(error: Error): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_LOCATIONS_FAILURE,
    payload: error,
  };
}

export function deleteGranjaAnimalRequest(animalId: string): GranjaActionTypes {
  return {
    type: GranjaTypes.DELETE_GRANJA_ANIMAL_REQUEST,
    payload: { animalId },
  };
}

export function deleteGranjaAnimalSuccess(animalId: string): GranjaActionTypes {
  return {
    type: GranjaTypes.DELETE_GRANJA_ANIMAL_SUCCESS,
    payload: { animalId },
  };
}

export function deleteGranjaAnimalFailure(error: Error): GranjaActionTypes {
  return {
    type: GranjaTypes.DELETE_GRANJA_ANIMAL_FAILURE,
    payload: error,
  };
}

export function updateAnimalFieldValueRequest(animalId: string, animal: Animal): GranjaActionTypes {
  return {
    type: GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_REQUEST,
    payload: { animalId, animal },
  };
}

export function updateAnimalFieldValueSuccess(animal: Animal): GranjaActionTypes {
  return {
    type: GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_SUCCESS,
    payload: animal,
  };
}

export function updateAnimalFieldValueFailure(error: Error): GranjaActionTypes {
  return {
    type: GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_FAILURE,
    payload: error,
  };
}

export function filterGranjaAnimalsRequest(field: string, value: ReactText): GranjaActionTypes {
  return {
    type: GranjaTypes.FILTER_GRANJA_ANIMALS_REQUEST,
    payload: { field, value },
  };
}

export function filterGranjaAnimalsSuccess(field: string, value: ReactText): GranjaActionTypes {
  return {
    type: GranjaTypes.FILTER_GRANJA_ANIMALS_SUCCESS,
    payload: { field, value },
  };
}

export function filterGranjaAnimalsFailure(error: Error): GranjaActionTypes {
  return {
    type: GranjaTypes.FILTER_GRANJA_ANIMALS_FAILURE,
    payload: error,
  };
}

export function paginateGranjaAnimalsRequest(
  granjaId: number,
  filters: AnimalsFilter,
  page: number
): GranjaActionTypes {
  return {
    type: GranjaTypes.PAGINATE_GRANJA_ANIMALS_REQUEST,
    payload: { granjaId, filters, page },
  };
}

export function paginateGranjaAnimalsSuccess(
  animals: Animal[],
  count: number,
  pagination: Pagination
): GranjaActionTypes {
  return {
    type: GranjaTypes.PAGINATE_GRANJA_ANIMALS_SUCCESS,
    payload: {
      animals,
      count,
      pagination,
    },
  };
}

export function paginateGranjaAnimalsFailure(error: Error): GranjaActionTypes {
  return {
    type: GranjaTypes.PAGINATE_GRANJA_ANIMALS_FAILURE,
    payload: error,
  };
}

export function shouldFetchMoreAnimals(shouldFetchMore: boolean): GranjaActionTypes {
  return {
    type: GranjaTypes.SHOULD_FETCH_MORE_ANIMALS,
    payload: shouldFetchMore,
  };
}

export function cleanSuccessMessage(): GranjaActionTypes {
  return {
    type: GranjaTypes.CLEAN_SUCCESS_MESSAGE,
  };
}
