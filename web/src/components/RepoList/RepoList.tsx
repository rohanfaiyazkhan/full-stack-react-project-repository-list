import React from 'react';
import { Repo } from '../../models/Repo';
import { RepoListItem } from './RepoListItem';

interface RepoListProps {
  repos: Repo[];
  navigateHandler: (index: number) => void;
  filterBy?: string;
}

export function RepoList({
  repos,
  navigateHandler,
  filterBy,
}: RepoListProps): React.ReactElement<any, any> {
  //  Sort repos in reverse chronological order
  let reposForDisplay = repos.sort((prev, next) => {
    const prevCreatedAt = Number(new Date(prev.created_at));
    const nextCreatedAt = Number(new Date(next.created_at));

    return nextCreatedAt - prevCreatedAt;
  });

  // If language to filter repos by is provided, filter by said language
  if (filterBy !== undefined) {
    reposForDisplay = reposForDisplay.filter(
      (val) => val.language === filterBy
    );
  }

  if (reposForDisplay.length === 0) {
    return <p>No repositories were found.</p>;
  }

  return (
    <ul
      className="flex flex-col lg:grid lg:place-items-stretch lg:gap-y-2 lg:gap-x-1"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))' }}
    >
      {reposForDisplay.map((repo, idx) => (
        <RepoListItem
          repo={repo}
          index={idx}
          navigateHandler={navigateHandler}
          key={`${repo.id}-${idx}`}
        />
      ))}
    </ul>
  );
}
