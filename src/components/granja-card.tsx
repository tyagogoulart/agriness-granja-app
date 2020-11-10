import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Granja } from '../store/reducers/granja/types';

type Props = {
  granja: Granja;
  style?: object;
};

const GranjaCard: React.FC<Props> = ({ granja, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{granja.nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default GranjaCard;
