import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { colors } from '../styles';

type Props = {
  message?: string;
  style?: StyleProp<TextStyle>;
};

const ErrorMessage: React.FC<Props> = ({ message, style }) => {
  return <Text style={[styles.error, style]}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.error,
  },
});

export default ErrorMessage;
