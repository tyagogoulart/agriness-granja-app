import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  attr: string;
  minWidth?: number;
};

const AnimalAttribute: React.FC<Props> = ({ attr, minWidth }) => {
  return (
    <View style={[styles.attrWrapper, { minWidth: minWidth !== undefined ? minWidth : 75 }]}>
      <Text style={styles.attr}>{attr}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  attr: {
    fontSize: 11,
    color: '#000000',
    textAlign: 'left',
  },
  attrWrapper: {
    flexDirection: 'row',
  },
});

export default AnimalAttribute;
