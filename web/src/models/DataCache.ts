import { ApiError } from './ApiError';
import { Repo } from './Repo';

export interface DataCache<T = Repo[]> {
  fetchedOn?: number;
  failedOn?: number;
  error?: ApiError;
  resource?: T;
}
