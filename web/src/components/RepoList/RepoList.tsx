import React from 'react';
import { Repo } from '../../models/Repo';
import { RepoListItem } from './RepoListItem';

interface RepoListProps {
  repos: Repo[];
  navigateHandler: (index: number) => void;
  filterBy?: string;
}

export function RepoList(props: RepoListProps): React.ReactElement<any, any> {
  if (props.repos.length === 0) {
    return <p>No repositories were found.</p>;
  }

  //  Sort repos in reverse chronological order
  let reposForDisplay = props.repos.sort((prev, next) => {
    const prevCreatedAt = Number(new Date(prev.created_at));
    const nextCreatedAt = Number(new Date(next.created_at));

    return nextCreatedAt - prevCreatedAt;
  });

  // If language to filter repos by is provided, filter by said language
  if (props.filterBy !== undefined) {
    reposForDisplay = reposForDisplay.filter(
      (val) => val.language === props.filterBy
    );
  }

  return (
    <ul
      className="flex flex-col lg:grid lg:place-items-stretch lg:gap-2"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))' }}
    >
      {reposForDisplay.map((repo, idx) => (
        <RepoListItem repo={repo} key={`${repo.id}-${idx}`} />
      ))}
    </ul>
  );
}
