import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GranjaCard from '../components/granja-card';
import { RootState } from '../store/reducers';
import { listUserGranjasRequest } from '../store/reducers/user/actions';

const GranjasList: React.FC = () => {
  const granjas = useSelector((state: RootState) => state.user.granjas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUserGranjasRequest());
  }, []);

  return (
    <View style={styles.list}>
      {granjas.map((granja) => (
        <GranjaCard key={granja.id} granja={granja} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default GranjasList;
