import { ReactText } from 'react';

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
}

export interface Error {
  message: string;
  status: number;
}

export interface Granja {
  id: number;
  nome: string;
  responsavel: number;
  usuarios: [];
}

export interface Animal {
  id: string;
  fase_producao: {
    id: number;
    descricao: string;
    sigla: string;
  };
  tipo_granja: {
    id: number;
    descricao: string;
    sigla: string;
  };
  localizacao: string;
  raca: string;
  granja: number;
  nome: string;
  tipo_animal: string;
  status_animal: number;
  data_nascimento: string;
  entrada_plantel: string;
  peso_compra: number;
  codigo_rastreamento: string;
}

export interface Location {
  id: number;
  nome: string;
}

export interface GranjaState {
  readonly animals: Animal[];
  readonly locations: Location[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export interface ListGranjaAnimalsRequestAction {
  type: typeof GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST;
  payload: { granjaId: number; filters: { name: string; location: ReactText } };
}

interface ListGranjaAnimalsSuccessAction {
  type: typeof GranjaTypes.LIST_GRANJA_ANIMALS_SUCCESS;
  payload: Animal[];
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
}

interface DeleteGranjaAnimalFailureAction {
  type: typeof GranjaTypes.DELETE_GRANJA_ANIMAL_FAILURE;
  payload: Error;
}

export interface UpdateAnimalFieldValueRequestAction {
  type: typeof GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_REQUEST;
  payload: { animalId: string; animal: Animal };
}

interface UpdateAnimalFieldValueSuccessAction {
  type: typeof GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_SUCCESS;
  payload: Animal;
}

interface UpdateAnimalFieldValueFailureAction {
  type: typeof GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_FAILURE;
  payload: Error;
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
  | UpdateAnimalFieldValueFailureAction;
