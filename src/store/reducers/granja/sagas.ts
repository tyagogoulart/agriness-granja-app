import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  deleteGranjaAnimalFailure,
  deleteGranjaAnimalSuccess,
  listGranjaAnimalsFailure,
  listGranjaAnimalsSuccess,
  listGranjaLocationsFailure,
  listGranjaLocationsSuccess,
  updateAnimalFieldValueFailure,
  updateAnimalFieldValueSuccess,
} from './actions';
import {
  DeleteGranjaAnimalRequestAction,
  GranjaTypes,
  ListGranjaAnimalsRequestAction,
  ListGranjaLocationsRequestAction,
  UpdateAnimalFieldValueRequestAction,
} from './types';

export function* listGranjaAnimals({ payload }: ListGranjaAnimalsRequestAction) {
  try {
    const filters = {
      nome__icontains: payload.filters.name,
      localizacao: payload.filters.location.toString(),
    };
    const params = new URLSearchParams(filters).toString();
    const apiCall = () => {
      return api.get(`/granjas/${payload.granjaId}/animais/?${params}`);
    };

    const { data } = yield call(apiCall);
    yield put(listGranjaAnimalsSuccess(data.results));
  } catch (error) {
    yield put(listGranjaAnimalsFailure(error));
  }
}

export function* listGranjaLocations({ payload }: ListGranjaLocationsRequestAction) {
  try {
    const apiCall = () => {
      return api.get(`/granjas/${payload.granjaId}/localizacoes/`);
    };

    const { data } = yield call(apiCall);
    yield put(listGranjaLocationsSuccess(data.results));
  } catch (error) {
    yield put(listGranjaLocationsFailure(error));
  }
}

export function* deleteGranjaAnimal({ payload }: DeleteGranjaAnimalRequestAction) {
  try {
    const apiCall = () => {
      return api.delete(`/animais/${payload.animalId}/`);
    };

    const { data } = yield call(apiCall);
    yield put(deleteGranjaAnimalSuccess());
  } catch (error) {
    yield put(deleteGranjaAnimalFailure(error));
  }
}

export function* updateAnimalFieldValue({ payload }: UpdateAnimalFieldValueRequestAction) {
  try {
    const apiCall = () => {
      return api.put(`/animais/${payload.animalId}/`, payload.animal);
    };

    const { data } = yield call(apiCall);
    yield put(updateAnimalFieldValueSuccess(payload.animal));
  } catch (error) {
    yield put(updateAnimalFieldValueFailure(error));
  }
}

export default all([
  takeLatest(GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST, listGranjaAnimals),
  takeLatest(GranjaTypes.LIST_GRANJA_LOCATIONS_REQUEST, listGranjaLocations),
  takeLatest(GranjaTypes.DELETE_GRANJA_ANIMAL_REQUEST, deleteGranjaAnimal),
  takeLatest(GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_REQUEST, updateAnimalFieldValue),
]);
