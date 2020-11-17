import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import GranjasList from '../containers/granjas-list';
import Greeting from '../containers/greeting';
import { colors } from '../styles';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Greeting />
      <Text style={styles.message}>Escolha uma de suas granjas para continuar</Text>
      <GranjasList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  message: {
    paddingBottom: 16,
    paddingTop: 4,
  },
});

export default HomeScreen;
