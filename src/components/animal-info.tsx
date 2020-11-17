import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { metrics } from '../styles';

type Props = { label: string; value: string };

const AnimalInfo: React.FC<Props> = ({ label, value }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: metrics.smallMargin,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default AnimalInfo;
