import { combineReducers } from 'redux';

import granja from './granja';
import user from './user';

export const rootReducer = combineReducers({
  granja,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;
