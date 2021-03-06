import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';

import { buildStore } from '../store';

export function renderWithRedux(component: React.ReactElement, { state }: { state?: object } = {}) {
  const store = buildStore(state);
  const queries = render(<Provider store={store}>{component}</Provider>);

  return {
    ...queries,
    store,
  };
}
