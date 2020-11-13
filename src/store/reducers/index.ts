import { combineReducers } from 'redux';

import auth from './auth';
import granja from './granja';
import user from './user';

export const rootReducer = combineReducers({
  granja,
  user,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
