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
