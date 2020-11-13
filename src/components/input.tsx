import React from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { TextInput, NativeViewGestureHandlerProperties } from 'react-native-gesture-handler';

type Props = NativeViewGestureHandlerProperties & TextInputProps;

const Input: React.FC<Props> = (props) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cecece',
    marginBottom: 16,
    borderRadius: 4,
    fontSize: 15,
    color: '#000000',
    height: 40,
    padding: 8,
  },
});

export default Input;
