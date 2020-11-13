import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '../components/input';
import { LogInRequest } from '../store/reducers/auth/actions';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onPress = () => {
    dispatch(LogInRequest({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/agriness.png')} />
      <Input
        style={styles.input}
        keyboardType="email-address"
        value={email}
        placeholder="Seu e-mail"
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        style={styles.input}
        secureTextEntry
        value={password}
        placeholder="Sua senha"
        onChangeText={(value) => setPassword(value)}
      />
      <Button color="#315ea8" title="Entrar" onPress={onPress} />
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default LoginForm;
