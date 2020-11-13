import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../store/reducers';

const Greeting: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.activeUser);

  return <Text style={styles.title}>Olá, {user.nome}</Text>;
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Greeting;
