import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

import { Granja } from '../store/reducers/granja/types';
import Button from './button';
import Card from './card';

type Props = {
  granja: Granja;
  style?: StyleProp<ViewStyle>;
};

const GranjaCard: React.FC<Props> = ({ granja, style }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('GranjaAnimals', { granjaId: granja.id });
  };
  return (
    <Card style={style}>
      <Text style={styles.title}>{granja.nome}</Text>
      <Text style={styles.address}>Rua São Sebastião, 19 - Maceió, AL</Text>
      <Text style={styles.subtext}>16 animais listados</Text>
      <Button color="#315ea8" style={styles.roundedButton} title="VER ANIMAIS" onPress={onPress} />
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subtext: {
    textAlign: 'center',
    marginTop: 2,
  },
  address: {
    textAlign: 'center',
    marginTop: 4,
  },
  roundedButton: {
    borderRadius: 4,
    marginTop: 16,
  },
});

export default GranjaCard;
