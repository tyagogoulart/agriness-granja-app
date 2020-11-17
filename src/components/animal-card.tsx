import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/reducers';
import { deleteGranjaAnimalRequest } from '../store/reducers/granja/actions';
import { Animal } from '../store/reducers/granja/protocols/animal';
import { colors, metrics } from '../styles';
import { statusAnimal } from '../utils/animal-status-helpers';
import AnimalAttribute from './animal-attribute';
import Card from './card';

type Props = {
  animal: Animal;
  style?: StyleProp<ViewStyle>;
};

const AnimalCard: React.FC<Props> = ({ animal, style }) => {
  const navigation = useNavigation();
  const user = useSelector((state: RootState) => state.user.activeUser);
  const [granja] = useSelector((state: RootState) =>
    state.user.granjas.filter((granja) => granja.id === animal.granja)
  );
  const dispatch = useDispatch();

  const onPress = () => {
    navigation.navigate('AnimalDetail', { animalId: animal.id });
  };

  const handleDelete = () => {
    Alert.alert('Deletar animal', `Tem certeza que quer deletar o animal ${animal.nome}?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Sim, quero deletar',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteGranjaAnimalRequest(animal.id));
        },
      },
    ]);
  };

  const goToEdit = () => {
    navigation.navigate('AnimalUpdate', { animalId: animal.id });
  };

  const handleActions = () => {
    if (user.id === granja.responsavel) {
      Alert.alert(
        `${granja.nome}`,
        `Você é o responsável desta granja, então pode editar ou deletar o animal ${animal.nome}.`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Editar',
            style: 'default',
            onPress: () => {
              goToEdit();
            },
          },
          {
            text: 'Deletar',
            style: 'default',
            onPress: () => {
              handleDelete();
            },
          },
        ]
      );
    } else {
      Alert.alert(
        `${granja.nome}`,
        `Você não é o responsável desta granja, por isso não tem permissões de promover ações do animal ${animal.nome}. Consulte o responsável da granja!`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
        ]
      );
    }
  };

  return (
    <Card style={[style]}>
      <View style={styles.title}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.name}>{animal.nome}</Text>
        </TouchableOpacity>
        <View style={styles.rightContent}>
          <AnimalAttribute attr={animal.tipo_animal} minWidth={60} />
          <AnimalAttribute attr={statusAnimal(animal.status_animal)} />
          <AnimalAttribute attr={`${animal.peso_compra} KG`} minWidth={67} />
          <TouchableOpacity onPress={handleActions} style={{ paddingHorizontal: 3 }}>
            <FontAwesomeIcon icon="ellipsis-v" size={6} style={{ paddingTop: 16 }} />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginRight: metrics.smallMargin,
    fontWeight: 'bold',
    color: colors.dark,
    fontSize: 16,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default AnimalCard;
