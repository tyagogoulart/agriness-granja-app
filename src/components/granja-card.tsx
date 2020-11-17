import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Granja } from '../store/reducers/granja/protocols/granja';
import { metrics } from '../styles';
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
    <TouchableOpacity onPress={onPress}>
      <Card style={style}>
        <Text style={styles.title}>{granja.nome}</Text>
        <Text style={styles.address}>{granja.endereco}</Text>
        <Text style={styles.subtext}>{granja.quantidade_animais} animais listados</Text>
      </Card>
    </TouchableOpacity>
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
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
  },
});

export default GranjaCard;
