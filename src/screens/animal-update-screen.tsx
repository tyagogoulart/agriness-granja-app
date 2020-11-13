import { Picker } from '@react-native-picker/picker';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { ReactText, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/card';
import Input from '../components/input';
import ScreenTitle from '../components/screen-title';
import { AnimalDetailScreenNavigationProp } from '../navigator';
import { RootState } from '../store/reducers';
import { updateAnimalFieldValueRequest } from '../store/reducers/granja/actions';
import { Animal } from '../store/reducers/granja/types';
import { statusAnimal } from '../utils/animal-status-helpers';

type RouteParams = {
  AnimalUpdate: {
    animalId: string;
  };
};
type Props = { navigation: AnimalDetailScreenNavigationProp };
type RouteProps = RouteProp<RouteParams, 'AnimalUpdate'>;

const AnimalUpdateScreen: React.FC<Props> = ({ navigation }) => {
  const { params } = useRoute<RouteProps>();
  const dispatch = useDispatch();
  const [animal] = useSelector((state: RootState) =>
    state.granja.animals.filter((animal) => animal.id === params.animalId)
  );
  const [animalUpdated, setAnimalUpdated] = useState<Animal>(animal);

  const handleChange = (field: string, value: ReactText) => {
    const animalUpdating = { ...animalUpdated, [field]: value };
    setAnimalUpdated(animalUpdating);
  };

  const onPress = () => {
    dispatch(updateAnimalFieldValueRequest(params.animalId, animalUpdated));
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title={animal.nome} />
      <Card>
        <Text>Nome</Text>
        <Input value={animalUpdated.nome} onChangeText={(value) => handleChange('nome', value)} />
        <Text>Status</Text>
        <Picker
          selectedValue={animalUpdated.status_animal}
          onValueChange={(itemValue: ReactText) => handleChange('status_animal', itemValue)}>
          <Picker.Item label={statusAnimal(0)} value={0} />
          <Picker.Item label={statusAnimal(1)} value={1} />
          <Picker.Item label={statusAnimal(2)} value={2} />
          <Picker.Item label={statusAnimal(3)} value={3} />
        </Picker>
        <Button title="Atualizar" onPress={onPress} />
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

export default AnimalUpdateScreen;
