import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import GranjaCard from '../components/granja-card';
import { RootState } from '../store/reducers';

const GranjasList: React.FC = () => {
  const granjas = useSelector((state: RootState) => state.user.granjas);

  return (
    <View style={styles.list}>
      {granjas.map((granja) => (
        <GranjaCard key={granja.id} granja={granja} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: 16,
  },
});

export default GranjasList;
