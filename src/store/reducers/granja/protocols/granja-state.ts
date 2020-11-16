import { Animal } from './animal';
import { AnimalsFilter } from './animals-filter';
import { Error } from './error';
import { Location } from './location';
import { Pagination } from './pagination';

export interface GranjaState {
  readonly animals: Animal[];
  readonly locations: Location[];
  readonly filters: AnimalsFilter;
  readonly isLoading: boolean;
  readonly pagination: Pagination;
  readonly error: Error | null;
  readonly success: string;
}
