import React from 'react';
import { StyleSheet, View } from 'react-native';

import AnimalDetailCard from '../containers/animal-detail-card';
import AnimalDetailHeader from '../containers/animal-detail-header';
import { AnimalDetailScreenRouteProp } from '../navigator';

type Props = {
  route: AnimalDetailScreenRouteProp;
};

const AnimalDetailScreen: React.FC<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <AnimalDetailHeader animalId={route.params.animalId} />
      <AnimalDetailCard animalId={route.params.animalId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 16,
  },
});

export default AnimalDetailScreen;
