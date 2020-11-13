import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AnimalInfo from '../components/animal-info';
import Card from '../components/card';
import ScreenTitle from '../components/screen-title';
import { AnimalDetailScreenNavigationProp } from '../navigator';
import { RootState } from '../store/reducers';
import { deleteGranjaAnimalRequest } from '../store/reducers/granja/actions';
import { statusIcon } from '../utils/animal-status-helpers';

type RouteParams = {
  AnimalDetail: {
    animalId: string;
  };
};
type Props = { navigation: AnimalDetailScreenNavigationProp };
type RouteProps = RouteProp<RouteParams, 'AnimalDetail'>;

const AnimalDetailScreen: React.FC<Props> = ({ navigation }) => {
  const { params } = useRoute<RouteProps>();
  const dispatch = useDispatch();
  const [animal] = useSelector((state: RootState) =>
    state.granja.animals.filter((animal) => animal.id === params.animalId)
  );
  const user = useSelector((state: RootState) => state.user.activeUser);
  const [granja] = useSelector((state: RootState) =>
    state.user.granjas.filter((granja) => granja.id === animal.granja)
  );

  const deleteAnimalAlert = () => {
    return Alert.alert(
      'Deletar animal',
      `Tem certeza que quer deletar o animal ${animal.nome}?`,
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            navigation.goBack();
            dispatch(deleteGranjaAnimalRequest(animal.id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const goToEdit = () => {
    navigation.navigate('AnimalUpdate', { animalId: animal.id });
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title={animal.nome}>
        <Text style={{ marginTop: 5, marginLeft: 8 }}>
          <FontAwesomeIcon icon={statusIcon(animal.status_animal)} />
        </Text>
      </ScreenTitle>
      <Text style={styles.code}>{animal.codigo_rastreamento}</Text>
      <Card>
        <AnimalInfo label="Tipo" value={animal.tipo_animal} />
        <AnimalInfo label="Raça" value={animal.raca} />
        <AnimalInfo label="Localização na Granja" value={animal.localizacao} />
        <AnimalInfo
          label="Data de Nascimento"
          value={new Date(animal.data_nascimento).toLocaleString()}
        />
        <AnimalInfo
          label="Fase de Produção"
          value={`${animal.fase_producao.sigla} - ${animal.fase_producao.descricao}`}
        />
        <AnimalInfo
          label="Entrada no Plantel"
          value={new Date(animal.entrada_plantel).toLocaleDateString()}
        />
        <AnimalInfo label="Peso na compra" value={`${animal.peso_compra} kg`} />
        <AnimalInfo
          label="Tipo de Granja"
          value={`${animal.tipo_granja.sigla} - ${animal.tipo_granja.descricao}`}
        />
        <View style={{ width: 110, marginTop: 16, flexDirection: 'row' }}>
          {user.id === granja.responsavel && (
            <Button color="purple" title="Deletar" onPress={deleteAnimalAlert}>
              Responsável
            </Button>
          )}
          {user.id === granja.responsavel && (
            <Button title="Editar" onPress={goToEdit}>
              Responsável
            </Button>
          )}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 16,
  },
  code: {
    fontSize: 10,
    color: '#315ea8',
    marginBottom: 16,
  },
  cancel: {
    color: 'red',
  },
});

export default AnimalDetailScreen;
