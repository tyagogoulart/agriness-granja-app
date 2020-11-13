import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import GranjasList from '../containers/granjas-list';
import Greeting from '../containers/greeting';
import { HomeScreenRouteProp, HomeScreenNavigationProp } from '../navigator';

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }: Props) => {
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
    backgroundColor: '#fafafa',
    padding: 16,
  },
  message: {
    paddingBottom: 16,
    paddingTop: 4,
  },
});

export default HomeScreen;
