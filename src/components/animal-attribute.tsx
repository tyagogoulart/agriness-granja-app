import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  attr: string;
};

const AnimalAttribute: React.FC<Props> = ({ attr }) => {
  return (
    <View style={styles.attrWrapper}>
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
    minWidth: 73,
  },
});

export default AnimalAttribute;
