import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GranjasList from '../containers/granjas-list';
import { HomeScreenRouteProp, HomeScreenNavigationProp } from '../navigator';

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo</Text>
      <GranjasList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    textAlign: 'center',
    padding: 16,
    fontSize: 18,
  },
});

export default HomeScreen;
