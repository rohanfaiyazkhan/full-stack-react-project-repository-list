import React from 'react';
import { Repo } from '../../models/Repo';

interface RepoListItemProps {
  repo: Repo;
}

export function RepoListItem({
  repo,
}: RepoListItemProps): React.ReactElement<any, any> {
  return (
    <li className="gray-300 shadow rounded-sm">
      <article>
        <h3 className="font-bold text-lg mb-1">{repo.name}</h3>
        <p className="text-sm mb-2">{repo.description}</p>
        <div className="flex justify-end">
          <p className="text-sm mr-2">
            Forked {repo.forks_count} {repo.forks_count > 1 ? 'times' : 'time'}
          </p>
          <div className="px-2 py-1 border border-gray-600">
            {repo.language}
          </div>
        </div>
      </article>
    </li>
  );
}
