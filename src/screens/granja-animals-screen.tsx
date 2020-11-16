import React from 'react';

import GranjaAnimalsContent from '../containers/granja-animals-content';
import { GranjaAnimalsScreenRouteProp } from '../navigator';

type Props = {
  route: GranjaAnimalsScreenRouteProp;
};

const GranjaAnimalsScreen: React.FC<Props> = ({ route }) => {
  return <GranjaAnimalsContent granjaId={route.params.granjaId} />;
};

export default GranjaAnimalsScreen;
