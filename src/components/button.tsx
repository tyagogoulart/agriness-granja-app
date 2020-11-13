import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

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
    borderColor: '#315ea8',
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 16,
  },
});

export default Button;
