export const GET_ACTIVE_GRANJA = 'granja/GET_ACTIVE_GRANJA';
export const LIST_GRANJA_ANIMALS = 'granja/LIST_GRANJA_ANIMALS';

export interface Granja {
  id: number;
  nome: string;
  responsavel: number;
  usuarios: [];
}

export interface Animal {
  id: string;
  fase_producao: object;
  tipo_granja: object;
  localizacao: string;
  raca: string;
  granja: string;
  nome: string;
  tipo_animal: string;
  status_animal: number;
  data_nascimento: string;
  entrada_plantel: string;
  peso_compra: number;
  codigo_rastreamento: string;
}

export interface GranjaState {
  granja: Granja;
  animals: Animal[];
}

interface GetActiveGranjaAction {
  type: typeof GET_ACTIVE_GRANJA;
  payload: Granja;
}

interface ListGranjaAnimalsAction {
  type: typeof LIST_GRANJA_ANIMALS;
  payload: Animal[];
}

export type GranjaActionTypes = GetActiveGranjaAction | ListGranjaAnimalsAction;
