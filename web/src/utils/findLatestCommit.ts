import { Commit } from '../models/Commit';

/**
 * Loops through list commits and returns the latest one
 */
export function findLatestCommit(commits: Commit[]) {
  if (commits.length === 0) {
    return undefined;
  }

  if (commits.length === 1) {
    return commits[0];
  }

  let latestCommit = commits[0];
  let latestCommitDate = Number(new Date(latestCommit.commit.author.date));

  for (let i = 1; i < commits.length; i++) {
    const commitDate = Number(new Date(commits[i].commit.author.date));
    if (commitDate > latestCommitDate) {
      latestCommit = commits[i];
      latestCommitDate = commitDate;
    }
  }

  return latestCommit;
}
