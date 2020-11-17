import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { metrics } from '../styles';

type Props = {
  title: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ScreenTitle: React.FC<Props> = ({ title, children, style }) => {
  return (
    <View style={[styles.titleWrapper, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScreenTitle;
