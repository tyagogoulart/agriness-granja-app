import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { filtersToURLParams } from '../../../utils/filters-to-url-params';
import {
  deleteGranjaAnimalFailure,
  deleteGranjaAnimalSuccess,
  filterGranjaAnimalsFailure,
  filterGranjaAnimalsSuccess,
  listGranjaAnimalsFailure,
  listGranjaAnimalsSuccess,
  listGranjaLocationsFailure,
  listGranjaLocationsSuccess,
  paginateGranjaAnimalsFailure,
  paginateGranjaAnimalsSuccess,
  updateAnimalFieldValueFailure,
  updateAnimalFieldValueSuccess,
} from './actions';
import {
  DeleteGranjaAnimalRequestAction,
  FilterGranjaAnimalsRequestAction,
  GranjaTypes,
  ListGranjaAnimalsRequestAction,
  ListGranjaLocationsRequestAction,
  PaginateGranjaAnimalsRequestAction,
  UpdateAnimalFieldValueRequestAction,
} from './types';

export function* listGranjaAnimals({ payload }: ListGranjaAnimalsRequestAction) {
  try {
    const params = filtersToURLParams(payload.filters, payload.page);
    const apiCall = () => {
      return api.get(`/granjas/${payload.granjaId}/animais/?${params}`);
    };

    const { data } = yield call(apiCall);
    const pagination = {
      page: payload.page + 1,
      maxPage: Math.ceil(data.count / 15),
      shouldFetchMore: false,
    };
    yield put(listGranjaAnimalsSuccess(data.results, data.count, pagination));
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
    yield put(deleteGranjaAnimalSuccess(payload.animalId));
  } catch (error) {
    yield put(deleteGranjaAnimalFailure(error));
  }
}

export function* updateAnimalFieldValue({ payload }: UpdateAnimalFieldValueRequestAction) {
  try {
    yield put(updateAnimalFieldValueSuccess(payload.animal));
  } catch (error) {
    yield put(updateAnimalFieldValueFailure(error));
  }
}

export function* filterGranjaAnimals({ payload }: FilterGranjaAnimalsRequestAction) {
  try {
    yield put(filterGranjaAnimalsSuccess(payload.field, payload.value));
  } catch (error) {
    yield put(filterGranjaAnimalsFailure(error));
  }
}

export function* paginateGranjaAnimals({ payload }: PaginateGranjaAnimalsRequestAction) {
  try {
    const params = filtersToURLParams(payload.filters, payload.page);
    const apiCall = () => {
      return api.get(`/granjas/${payload.granjaId}/animais/?${params}`);
    };

    const { data } = yield call(apiCall);
    const pagination = {
      page: payload.page + 1,
      maxPage: Math.ceil(data.count / 15),
      shouldFetchMore: false,
    };
    yield put(paginateGranjaAnimalsSuccess(data.results, data.count, pagination));
  } catch (error) {
    yield put(paginateGranjaAnimalsFailure(error));
  }
}

export default all([
  takeLatest(GranjaTypes.LIST_GRANJA_ANIMALS_REQUEST, listGranjaAnimals),
  takeLatest(GranjaTypes.LIST_GRANJA_LOCATIONS_REQUEST, listGranjaLocations),
  takeLatest(GranjaTypes.DELETE_GRANJA_ANIMAL_REQUEST, deleteGranjaAnimal),
  takeLatest(GranjaTypes.UPDATE_ANIMAL_FIELD_VALUE_REQUEST, updateAnimalFieldValue),
  takeLatest(GranjaTypes.FILTER_GRANJA_ANIMALS_REQUEST, filterGranjaAnimals),
  takeLatest(GranjaTypes.PAGINATE_GRANJA_ANIMALS_REQUEST, paginateGranjaAnimals),
]);
