import { ReactText } from 'react';

import { Animal } from './protocols/animal';
import { AnimalsFilter } from './protocols/animals-filter';
import { Error } from './protocols/error';
import { Location } from './protocols/location';
import { Pagination } from './protocols/pagination';

export enum GranjaTypes {
  LIST_GRANJA_LOCATIONS_REQUEST = 'granja/LIST_GRANJA_LOCATIONS_REQUEST',
  LIST_GRANJA_LOCATIONS_SUCCESS = 'granja/LIST_GRANJA_LOCATIONS_SUCCESS',
  LIST_GRANJA_LOCATIONS_FAILURE = 'granja/LIST_GRANJA_LOCATIONS_FAILURE',
  LIST_GRANJA_ANIMALS_REQUEST = 'granja/LIST_GRANJA_ANIMALS_REQUEST',
  LIST_GRANJA_ANIMALS_SUCCESS = 'granja/LIST_GRANJA_ANIMALS_SUCCESS',
  LIST_GRANJA_ANIMALS_FAILURE = 'granja/LIST_GRANJA_ANIMALS_FAILURE',
  DELETE_GRANJA_ANIMAL_REQUEST = 'granja/DELETE_GRANJA_ANIMAL_REQUEST',
  DELETE_GRANJA_ANIMAL_SUCCESS = 'granja/DELETE_GRANJA_ANIMAL_SUCCESS',
  DELETE_GRANJA_ANIMAL_FAILURE = 'granja/DELETE_GRANJA_ANIMAL_FAILURE',
  UPDATE_ANIMAL_FIELD_VALUE_REQUEST = 'granja/UPDATE_ANIMAL_FIELD_VALUE_REQUEST',
  UPDATE_ANIMAL_FIELD_VALUE_SUCCESS = 'granja/UPDATE_ANIMAL_FIELD_VALUE_SUCCESS',
  UPDATE_ANIMAL_FIELD_VALUE_FAILURE = 'granja/UPDATE_ANIMAL_FIELD_VALUE_FAILURE',
  FILTER_GRANJA_ANIMALS_REQUEST = 'granja/FILTER_GRANJA_ANIMALS_REQUEST',
  FILTER_GRANJA_ANIMALS_SUCCESS = 'granja/FILTER_GRANJA_ANIMALS_SUCCESS',
  FILTER_GRANJA_ANIMALS_FAILURE = 'granja/FILTER_GRANJA_ANIMALS_FAILURE',
  PAGINATE_GRANJA_ANIMALS_REQUEST = 'granja/PAGINATE_GRANJA_ANIMALS_REQUEST',
  PAGINATE_GRANJA_ANIMALS_SUCCESS = 'granja/PAGINATE_GRANJA_ANIMALS_SUCCESS',
  PAGINATE_GRANJA_ANIMALS_FAILURE = 'granja/PAGINATE_GRANJA_ANIMALS_FAILURE',
  SHOULD_FETCH_MORE_ANIMALS = 'granja/SHOULD_FETCH_MORE_ANIMALS',
  CLEAN_SUCCESS_MESSAGE = 'granja/CLEAN_SUCCESS_MESSAGE',
}

export interface ListGranjaAnimalsRequestAction {
  type: typeof GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST;
  payload: {
    granjaId: number;
    filters: AnimalsFilter;
    page: number;
  };
}

interface ListGranjaAnimalsSuccessAction {
  type: typeof GranjaTypes.LIST_GRANJA_ANIMALS_SUCCESS;
  payload: {
    animals: Animal[];
    count: number;
    pagination: Pagination;
  };
}

interface ListGranjaAnimalsFailureAction {
  type: typeof GranjaTypes.LIST_GRANJA_ANIMALS_FAILURE;
  payload: Error;
}

export interface ListGranjaLocationsRequestAction {
  type: typeof GranjaTypes.LIST_GRANJA_LOCATIONS_REQUEST;
  payload: { granjaId: number };
}

interface ListGranjaLocationsSuccessAction {
  type: typeof GranjaTypes.LIST_GRANJA_LOCATIONS_SUCCESS;
  payload: Location[];
}

interface ListGranjaLocationsFailureAction {
  type: typeof GranjaTypes.LIST_GRANJA_LOCATIONS_FAILURE;
  payload: Error;
}

export interface DeleteGranjaAnimalRequestAction {
  type: typeof GranjaTypes.DELETE_GRANJA_ANIMAL_REQUEST;
  payload: { animalId: string };
}

interface DeleteGranjaAnimalSuccessAction {
  type: typeof GranjaTypes.DELETE_GRANJA_ANIMAL_SUCCESS;
  payload: { animalId: string };
}

interface DeleteGranjaAnimalFailureAction {
  type: typeof GranjaTypes.DELETE_GRANJA_ANIMAL_FAILURE;
  payload: Error;
}

export interface UpdateAnimalFieldValueRequestAction {
  type: typeof GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_REQUEST;
  payload: {
    animalId: string;
    animal: Animal;
  };
}

interface UpdateAnimalFieldValueSuccessAction {
  type: typeof GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_SUCCESS;
  payload: Animal;
}

interface UpdateAnimalFieldValueFailureAction {
  type: typeof GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_FAILURE;
  payload: Error;
}

export interface FilterGranjaAnimalsRequestAction {
  type: typeof GranjaTypes.FILTER_GRANJA_ANIMALS_REQUEST;
  payload: {
    field: string;
    value: ReactText;
  };
}

interface FilterGranjaAnimalsSuccessAction {
  type: typeof GranjaTypes.FILTER_GRANJA_ANIMALS_SUCCESS;
  payload: {
    field: string;
    value: ReactText;
  };
}

interface FilterGranjaAnimalsFailureAction {
  type: typeof GranjaTypes.FILTER_GRANJA_ANIMALS_FAILURE;
  payload: Error;
}

export interface PaginateGranjaAnimalsRequestAction {
  type: typeof GranjaTypes.PAGINATE_GRANJA_ANIMALS_REQUEST;
  payload: {
    granjaId: number;
    filters: AnimalsFilter;
    page: number;
  };
}

interface PaginateGranjaAnimalsSuccessAction {
  type: typeof GranjaTypes.PAGINATE_GRANJA_ANIMALS_SUCCESS;
  payload: {
    animals: Animal[];
    count: number;
    pagination: Pagination;
  };
}

interface PaginateGranjaAnimalsFailureAction {
  type: typeof GranjaTypes.PAGINATE_GRANJA_ANIMALS_FAILURE;
  payload: Error;
}

interface PaginateGranjaAnimalsFailureAction {
  type: typeof GranjaTypes.PAGINATE_GRANJA_ANIMALS_FAILURE;
  payload: Error;
}

interface ShouldFetchMoreAnimalsAction {
  type: typeof GranjaTypes.SHOULD_FETCH_MORE_ANIMALS;
  payload: boolean;
}

interface CleanSuccessMessageAction {
  type: typeof GranjaTypes.CLEAN_SUCCESS_MESSAGE;
}

export type GranjaActionTypes =
  | ListGranjaAnimalsRequestAction
  | ListGranjaAnimalsSuccessAction
  | ListGranjaAnimalsFailureAction
  | ListGranjaLocationsRequestAction
  | ListGranjaLocationsSuccessAction
  | ListGranjaLocationsFailureAction
  | DeleteGranjaAnimalRequestAction
  | DeleteGranjaAnimalSuccessAction
  | DeleteGranjaAnimalFailureAction
  | UpdateAnimalFieldValueRequestAction
  | UpdateAnimalFieldValueSuccessAction
  | UpdateAnimalFieldValueFailureAction
  | FilterGranjaAnimalsRequestAction
  | FilterGranjaAnimalsSuccessAction
  | FilterGranjaAnimalsFailureAction
  | PaginateGranjaAnimalsRequestAction
  | PaginateGranjaAnimalsSuccessAction
  | PaginateGranjaAnimalsFailureAction
  | ShouldFetchMoreAnimalsAction
  | CleanSuccessMessageAction;
