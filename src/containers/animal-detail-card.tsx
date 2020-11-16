import React from 'react';
import { useSelector } from 'react-redux';

import AnimalInfo from '../components/animal-info';
import Card from '../components/card';
import Loading from '../components/loading';
import { RootState } from '../store/reducers';

type Props = {
  animalId: string;
};

const AnimalDetailCard: React.FC<Props> = ({ animalId }) => {
  const [animal] = useSelector((state: RootState) =>
    state.granja.animals.filter((animal) => animal.id === animalId)
  );
  const { isLoading } = useSelector((state: RootState) => state.granja);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Card>
          <AnimalInfo label="Tipo" value={animal.tipo_animal} />
          <AnimalInfo label="Raça" value={animal.raca} />
          <AnimalInfo label="Localização na Granja" value={animal.localizacao} />
          <AnimalInfo
            label="Data de Nascimento"
            value={new Date(animal.data_nascimento).toLocaleString()}
          />
          <AnimalInfo
            label="Fase de Produção"
            value={`${animal.fase_producao.sigla} - ${animal.fase_producao.descricao}`}
          />
          <AnimalInfo
            label="Entrada no Plantel"
            value={new Date(animal.entrada_plantel).toLocaleDateString()}
          />
          <AnimalInfo label="Peso na compra" value={`${animal.peso_compra} kg`} />
          <AnimalInfo
            label="Tipo de Granja"
            value={`${animal.tipo_granja.sigla} - ${animal.tipo_granja.descricao}`}
          />
        </Card>
      )}
    </>
  );
};

export default AnimalDetailCard;
