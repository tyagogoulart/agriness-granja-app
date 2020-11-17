import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { colors, metrics } from '../styles';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Card: React.FC<Props> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.smallMargin,
    backgroundColor: '#ffffff',
  },
});

export default Card;
