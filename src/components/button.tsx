import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { colors, metrics } from '../styles';

type ButtonProps = {
  title?: string;
};

type Props = TouchableOpacityProps & ButtonProps;

const Button: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={[styles.text]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 8,
    backgroundColor: '#ffffff',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
  },
  text: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: 16,
  },
});

export default Button;
