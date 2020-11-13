import { ReactText } from 'react';

import { Animal, GranjaActionTypes, Error, GranjaTypes, Location } from './types';

export function listGranjaAnimalsRequest(
  granjaId: number,
  filters: {
    name: string;
    location: ReactText;
  }
): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST,
    payload: { granjaId, filters },
  };
}

export function listGranjaAnimalsSuccess(animals: Animal[]): GranjaActionTypes {
  return {
    type: GranjaTypes.LIST_GRANJA_ANIMALS_SUCCESS,
    payload: animals,
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

export function deleteGranjaAnimalSuccess(): GranjaActionTypes {
  return {
    type: GranjaTypes.DELETE_GRANJA_ANIMAL_SUCCESS,
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
