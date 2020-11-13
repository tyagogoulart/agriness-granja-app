import { RouteProp, useRoute } from '@react-navigation/native';
import React, { ReactText, useState } from 'react';
import { useSelector } from 'react-redux';

import AnimalsFilters from '../components/animals-filters';
import Container from '../components/container';
import ScreenTitle from '../components/screen-title';
import AnimalsList from '../containers/animals-list';
import { GranjaAnimalsScreenNavigationProp } from '../navigator';
import { RootState } from '../store/reducers';

type RouteParams = {
  GranjaAnimals: {
    granjaId: number;
  };
};

type FilterProps = {
  name: string;
  location: ReactText;
};

type Props = { navigation: GranjaAnimalsScreenNavigationProp };

type RouteProps = RouteProp<RouteParams, 'GranjaAnimals'>;

const GranjaAnimalsScreen: React.FC<Props> = ({ navigation }) => {
  const { params } = useRoute<RouteProps>();
  const [granja] = useSelector((state: RootState) =>
    state.user.granjas.filter((granja) => granja.id === params.granjaId)
  );
  const [filters, setFilters] = useState<FilterProps>({
    name: '',
    location: '',
  });

  return (
    <Container>
      <ScreenTitle title={granja.nome} />
      <AnimalsFilters filters={filters} setFilters={setFilters} granjaId={params.granjaId} />
      <AnimalsList filters={filters} granjaId={params.granjaId} />
    </Container>
  );
};

export default GranjaAnimalsScreen;
