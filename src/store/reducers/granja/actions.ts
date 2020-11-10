import { Animal, GET_ACTIVE_GRANJA, Granja, GranjaActionTypes, LIST_GRANJA_ANIMALS } from './types';

export function getActiveGranja(granja: Granja): GranjaActionTypes {
  return {
    type: GET_ACTIVE_GRANJA,
    payload: granja,
  };
}

export function listGranjaAnimals(animals: Animal[]): GranjaActionTypes {
  return {
    type: LIST_GRANJA_ANIMALS,
    payload: animals,
  };
}
