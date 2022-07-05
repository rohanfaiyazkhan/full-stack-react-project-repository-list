import { Commit } from './Commit';
import { Repo } from './Repo';

export interface ResourceContainer<T> {
  requestOn?: number;
  fetchedOn?: number;
  failedOn?: number;
  error?: any;
  resource?: T;
  loadingState?: string;
}

/**
 * Data structure for caching network requests. For now we are just fetching when not empty, but we can always expand on this if needed
 * This is a very basic setup that include loading states, errors and timestamps
 * Repo list is fetched
 */
export interface DataCache {
  repositories?: ResourceContainer<Repo[]>;
  commits?: {
    [repoId: number]: ResourceContainer<Commit[]>;
  };
}
