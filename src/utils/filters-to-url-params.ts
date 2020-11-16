import { AnimalsFilter } from '../store/reducers/granja/protocols/animals-filter';

export const filtersToURLParams = (filters: AnimalsFilter, pagination: number) => {
  const filtersToURL = {
    nome__icontains: filters.name ? filters.name : '',
    localizacao: filters.location ? filters.location.toString() : '',
    page: pagination.toString(),
  };

  return new URLSearchParams(filtersToURL).toString();
};
