import React from 'react';

import AnimalUpdateContent from '../containers/animal-update-content';
import { AnimalUpdateScreenNavigationProp, AnimalUpdateScreenRouteProp } from '../navigator';

type Props = {
  navigation: AnimalUpdateScreenNavigationProp;
  route: AnimalUpdateScreenRouteProp;
};

const AnimalUpdateScreen: React.FC<Props> = ({ route, navigation }) => {
  return <AnimalUpdateContent navigation={navigation} route={route} />;
};

export default AnimalUpdateScreen;
