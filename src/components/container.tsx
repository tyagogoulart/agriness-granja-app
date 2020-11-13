import React from 'react';
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Container: React.FC<Props> = ({ children, style }) => {
  return <ScrollView style={[styles.container, style]}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    padding: 16,
  },
});

export default Container;
