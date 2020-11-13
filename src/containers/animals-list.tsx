import { useNavigation } from '@react-navigation/native';
import React, { ReactText, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AnimalCard from '../components/animal-card';
import EmptyList from '../components/empty-list';
import { RootState } from '../store/reducers';
import { listGranjaAnimalsRequest } from '../store/reducers/granja/actions';

type Props = {
  granjaId: number;
  filters: { name: string; location: ReactText };
};

const AnimalsList: React.FC<Props> = ({ granjaId, filters }) => {
  const navigation = useNavigation();
  const animals = useSelector((state: RootState) => state.granja.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.name.length >= 3 || filters.name.length === 0) {
      dispatch(listGranjaAnimalsRequest(granjaId, filters));
    }
  }, [filters]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     dispatch(listGranjaAnimalsRequest(granjaId, filters));
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <View style={styles.list}>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
      <EmptyList list={animals} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  empty: {
    textAlign: 'center',
  },
});

export default AnimalsList;
