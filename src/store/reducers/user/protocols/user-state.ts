import { Granja } from '../../granja/protocols/granja';
import { Error } from './error';
import { User } from './user';

export interface UserState {
  readonly activeUser: User;
  readonly granjas: Granja[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}
