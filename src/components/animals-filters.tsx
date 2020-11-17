import { Picker } from '@react-native-picker/picker';
import React, { Dispatch, ReactText, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/reducers';
import { listGranjaLocationsRequest } from '../store/reducers/granja/actions';
import { metrics } from '../styles';
import Input from './input';

type filterTypes = {
  name: string;
  location: ReactText;
};

type Props = {
  filters: filterTypes;
  setFilters: Dispatch<React.SetStateAction<filterTypes>>;
  granjaId: number;
};

const AnimalsFilters: React.FC<Props> = ({ filters, setFilters, granjaId }) => {
  const locations = useSelector((state: RootState) => state.granja.locations);
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
          placeholder="Nome"
          placeholderTextColor="#000000"
          value={filters.name}
          onChangeText={(value) => setFilters({ ...filters, name: value })}
        />
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={filters.location}
            style={styles.picker}
            onValueChange={(itemValue) => setFilters({ ...filters, location: itemValue })}>
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
  },
  text: {
    flex: 1,
    marginBottom: metrics.baseMargin,
  },
  filterWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginRight: metrics.smallMargin,
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
    marginBottom: metrics.baseMargin,
  },
});

export default AnimalsFilters;
