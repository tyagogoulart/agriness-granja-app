import React from 'react';
import { StyleSheet, TextInputProps, View, TextInput, StyleProp, ViewStyle } from 'react-native';

import { colors, metrics } from '../styles';
import ErrorMessage from './error-message';

type Props = TextInputProps & { error?: string; wrapperStyle?: StyleProp<ViewStyle> };

const Input: React.FC<Props> = (props) => {
  const hasError = props.error !== undefined && props.error !== '';

  return (
    <View style={[props.wrapperStyle, styles.wrapper]}>
      <TextInput
        {...props}
        style={[styles.input, props.style, { borderColor: hasError ? 'red' : '#cecece' }]}
      />
      {hasError && <ErrorMessage message={props.error} style={styles.error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: metrics.baseMargin,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.baseRadius,
    fontSize: 15,
    color: colors.dark,
    height: 40,
    padding: 8,
  },
  error: {
    marginTop: 4,
    textAlign: 'left',
  },
});

export default Input;
