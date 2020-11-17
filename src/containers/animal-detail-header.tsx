import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import ScreenTitle from '../components/screen-title';
import { RootState } from '../store/reducers';
import { colors, metrics } from '../styles';
import { statusIcon } from '../utils/animal-status-helpers';

type Props = {
  animalId: string;
};

const AnimalDetailHeader: React.FC<Props> = ({ animalId }) => {
  const [animal] = useSelector((state: RootState) =>
    state.granja.animals.filter((animal) => animal.id === animalId)
  );

  return (
    <View>
      <ScreenTitle title={animal.nome}>
        <Text style={{ marginTop: 5, marginLeft: 8 }}>
          <FontAwesomeIcon icon={statusIcon(animal.status_animal)} />
        </Text>
      </ScreenTitle>
      <Text style={styles.code}>{animal.codigo_rastreamento}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  code: {
    fontSize: 10,
    color: colors.primary,
    marginBottom: metrics.baseMargin,
  },
});

export default AnimalDetailHeader;
