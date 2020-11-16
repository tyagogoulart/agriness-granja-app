import { Picker } from '@react-native-picker/picker';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/input';
import { RootState } from '../store/reducers';
import {
  filterGranjaAnimalsRequest,
  listGranjaLocationsRequest,
} from '../store/reducers/granja/actions';

type Props = {
  granjaId: number;
};

const AnimalsFilters: React.FC<Props> = ({ granjaId }) => {
  const { locations, filters } = useSelector((state: RootState) => state.granja);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listGranjaLocationsRequest(granjaId));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça uma busca por animal</Text>
      <View style={styles.filterWrapper}>
        <Input
          style={styles.input}
          wrapperStyle={{ flex: 1 }}
          placeholder="Nome"
          placeholderTextColor="#000000"
          value={filters.name}
          onChangeText={(value) => dispatch(filterGranjaAnimalsRequest('name', value))}
        />
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={filters.location}
            style={styles.picker}
            onValueChange={(itemValue) =>
              dispatch(filterGranjaAnimalsRequest('location', itemValue))
            }>
            <Picker.Item label="Localização" value="" />
            {locations.map((location) => (
              <Picker.Item key={location.id} label={location.nome} value={location.id} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    flex: 1,
    marginBottom: 16,
  },
  filterWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    marginRight: 8,
  },
  picker: {
    backgroundColor: '#ffffff',
    height: 38,
    fontSize: 15,
  },
  pickerWrapper: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 4,
    marginBottom: 16,
  },
});

export default AnimalsFilters;
