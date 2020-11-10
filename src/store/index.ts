import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer } from './reducers';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState?: object) => {
  return createStore(rootReducer, preloadedState, composeEnhancers());
};

export default configureStore;
