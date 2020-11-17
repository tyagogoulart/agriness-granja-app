import { Picker } from '@react-native-picker/picker';
import React, { ReactText, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/card';
import Input from '../components/input';
import Loading from '../components/loading';
import ScreenTitle from '../components/screen-title';
import { AnimalUpdateScreenNavigationProp, AnimalUpdateScreenRouteProp } from '../navigator';
import { RootState } from '../store/reducers';
import {
  cleanSuccessMessage,
  updateAnimalFieldValueRequest,
} from '../store/reducers/granja/actions';
import { Animal } from '../store/reducers/granja/protocols/animal';
import { colors, metrics } from '../styles';
import { statusAnimal } from '../utils/animal-status-helpers';

type Props = {
  navigation: AnimalUpdateScreenNavigationProp;
  route: AnimalUpdateScreenRouteProp;
};

const AnimalUpdateContent: React.FC<Props> = ({ route, navigation }) => {
  const [animal] = useSelector((state: RootState) =>
    state.granja.animals.filter((animal) => animal.id === route.params.animalId)
  );
  const { error, isLoading, success } = useSelector((state: RootState) => state.granja);
  const dispatch = useDispatch();
  const [animalUpdated, setAnimalUpdated] = useState<Animal>(animal);

  useEffect(() => {
    dispatch(cleanSuccessMessage());
  }, []);

  const handleChange = (field: string, value: ReactText) => {
    const animalUpdating = { ...animalUpdated, [field]: value };
    setAnimalUpdated(animalUpdating);
  };

  const onPress = () => {
    dispatch(updateAnimalFieldValueRequest(route.params.animalId, animalUpdated));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <ScreenTitle title={animal.nome} />
          <Card style={styles.card}>
            <Text style={styles.success}>{success}</Text>
            <Text>Nome</Text>
            <Input
              value={animalUpdated.nome}
              onChangeText={(value) => handleChange('nome', value)}
            />
            <Text>Status</Text>
            <Picker
              style={styles.picker}
              selectedValue={animalUpdated.status_animal}
              onValueChange={(itemValue: ReactText) => handleChange('status_animal', itemValue)}>
              <Picker.Item label={statusAnimal(0)} value={0} />
              <Picker.Item label={statusAnimal(1)} value={1} />
              <Picker.Item label={statusAnimal(2)} value={2} />
              <Picker.Item label={statusAnimal(3)} value={3} />
            </Picker>
            <Button disabled={isLoading} title="Atualizar" onPress={onPress} />
          </Card>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: metrics.baseMargin,
  },
  card: {
    marginTop: 16,
  },
  picker: {
    marginBottom: 16,
  },
  success: {
    marginBottom: 16,
    textAlign: 'center',
    color: 'green',
  },
});

export default AnimalUpdateContent;
