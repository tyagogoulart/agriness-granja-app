import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Animal } from '../store/reducers/granja/types';
import { statusAnimal } from '../utils/animal-status-helpers';
import AnimalAttribute from './animal-attribute';
import Card from './card';

type Props = {
  animal: Animal;
  style?: StyleProp<ViewStyle>;
};

const AnimalCard: React.FC<Props> = ({ animal, style }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AnimalDetail', { animalId: animal.id });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={style}>
        <View style={styles.title}>
          <Text style={styles.name}>{animal.nome}</Text>
          <View style={styles.rightContent}>
            <AnimalAttribute attr={animal.tipo_animal} />
            <AnimalAttribute attr={statusAnimal(animal.status_animal)} />
            <AnimalAttribute attr={`${animal.peso_compra} KG`} />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginRight: 8,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default AnimalCard;
