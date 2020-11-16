import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import ScreenTitle from '../components/screen-title';
import AnimalsFilters from '../containers/animals-filters';
import AnimalsList from '../containers/animals-list';
import { RootState } from '../store/reducers';

type Props = {
  granjaId: number;
};

const GranjaAnimalsContent: React.FC<Props> = ({ granjaId }) => {
  const [granja] = useSelector((state: RootState) =>
    state.user.granjas.filter((granja) => granja.id === granjaId)
  );

  return (
    <View style={styles.container}>
      <ScreenTitle style={styles.title} title={granja.nome} />
      <AnimalsFilters granjaId={granjaId} />
      <View style={styles.listWrapper}>
        <AnimalsList granjaId={granjaId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    justifyContent: 'flex-start',
  },
  title: {
    paddingHorizontal: 16,
  },
  listWrapper: {
    marginTop: 65,
    marginBottom: 80,
  },
});

export default GranjaAnimalsContent;
