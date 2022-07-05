import { Repo } from '../models/Repo';

/**
 * Loops through repositories and returns list of all unique languages
 */
export function getAllUniqueLanguagesInRepos(repos: Repo[]) {
  const hashmap: Record<string, number> = {};

  for (const repo of repos) {
    if (repo.language) {
      hashmap[repo.language] = (hashmap[repo.language] ?? 0) + 1;
    }
  }

  return Object.keys(hashmap);
}
