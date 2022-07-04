import React from 'react';
import { Repo } from '../../models/Repo';
import { RepoListItem } from './RepoListItem';

interface RepoListProps {
  repos: Repo[];
  navigateHandler: (index: number) => void;
}

export function RepoList(props: RepoListProps): React.ReactElement<any, any> {
  if (props.repos.length === 0) {
    return <p>No repositories were found.</p>;
  }

  const sortedRepos = props.repos.sort((prev, next) => {
    const prevCreatedAt = Number(new Date(prev.created_at));
    const nextCreatedAt = Number(new Date(next.created_at));

    return prevCreatedAt - nextCreatedAt;
  });

  return (
    <ul
      className="flex flex-col lg:grid lg:place-items-stretch"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))' }}
    >
      {sortedRepos.map((repo) => (
        <RepoListItem repo={repo} key={repo.id} />
      ))}
    </ul>
  );
}
