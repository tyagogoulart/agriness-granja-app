import React, { useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/input';
import { RootState } from '../store/reducers';
import {
  LogInRequest,
  SetLoginCredentialRequest,
  validateEmailRequest,
  validatePasswordMinLengthRequest,
  validateRequiredFieldRequest,
} from '../store/reducers/auth/actions';

const LoginForm: React.FC = () => {
  const { error, isLoading, credentials } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const { password } = credentials;
    if (password.length >= 1 && password.length <= 4)
      dispatch(validatePasswordMinLengthRequest(password, 4));
  }, [credentials.password]);

  useEffect(() => {
    const { email } = credentials;
    if (email.length >= 1) dispatch(validateEmailRequest(email));
  }, [credentials.email]);

  const onPress = () => {
    const { email, password } = credentials;
    if (!email) dispatch(validateRequiredFieldRequest('email', email));
    if (!password) dispatch(validateRequiredFieldRequest('password', password));
    if (email && password) {
      dispatch(LogInRequest(credentials));
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/agriness.png')} />
      <View style={{ width: '100%' }}>
        <Text style={styles.error}>{error?.detail}</Text>
        <Input
          style={[styles.input]}
          keyboardType="email-address"
          value={credentials.email}
          placeholder="Seu e-mail"
          onChangeText={(value) => dispatch(SetLoginCredentialRequest('email', value))}
          error={error?.email}
        />
        <Input
          style={[styles.input, { marginBottom: 8 }]}
          secureTextEntry
          value={credentials.password}
          placeholder="Sua senha"
          onChangeText={(value) => dispatch(SetLoginCredentialRequest('password', value))}
          error={error?.password}
        />
        <Button
          disabled={isLoading || !!error?.email || !!error?.password || !!error?.detail}
          color="#315ea8"
          title="Entrar"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
  },
  logo: {
    marginBottom: 32,
    marginTop: 16,
  },
  error: {
    textAlign: 'center',
    marginBottom: 16,
    color: 'red',
  },
});

export default LoginForm;
