import { Credentials } from './credentials';
import { Error } from './error';

export interface AuthState {
  readonly credentials: Credentials;
  readonly isAuthenticated: boolean;
  readonly isLoading: boolean;
  readonly error: Error;
}
