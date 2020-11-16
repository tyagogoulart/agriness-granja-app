import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckCircle,
  faDonate,
  faEllipsisV,
  faMinusCircle,
  faPowerOff,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Provider } from 'react-redux';

import Navigations from './src/containers/navigations';
import store from './src/store';
// @refresh reset
library.add(faPowerOff, faCheckCircle, faMinusCircle, faDonate, faTimes, faEllipsisV);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;
