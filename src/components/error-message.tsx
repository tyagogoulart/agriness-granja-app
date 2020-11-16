import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
  message?: string;
  style?: StyleProp<TextStyle>;
};

const ErrorMessage: React.FC<Props> = ({ message, style }) => {
  return <Text style={[styles.error, style]}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default ErrorMessage;
