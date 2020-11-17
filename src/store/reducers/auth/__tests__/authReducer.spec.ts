import reducer from '..';
import { AuthState } from '../protocols/auth-state';

const initialState: AuthState = {
  credentials: {
    email: '',
    password: '',
  },
  isAuthenticated: false,
  isLoading: true,
  error: {
    email: '',
    password: '',
    detail: '',
    status: null,
  },
};

describe('authReducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
