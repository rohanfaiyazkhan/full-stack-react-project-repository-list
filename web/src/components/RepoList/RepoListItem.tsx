import React from 'react';
import { Repo } from '../../models/Repo';

interface RepoListItemProps {
  repo: Repo;
}

export function RepoListItem({
  repo,
}: RepoListItemProps): React.ReactElement<any, any> {
  return (
    <li className="bg-gray-300 px-4 py-4 shadow-lg rounded w-full my-1 lg:my-0 lg:max-w-sm">
      <article className="h-full flex flex-col">
        <h3 className="font-bold text-lg mb-1">{repo.name}</h3>
        <p className="text-sm mb-2 flex-grow">{repo.description}</p>
        <div className="flex justify-end items-center">
          <p className="text-sm mr-2">
            Forked {repo.forks_count} {repo.forks_count > 1 ? 'times' : 'time'}
          </p>
          <div className="px-2 py-1 border-2 border-gray-600">
            {repo.language}
          </div>
        </div>
      </article>
    </li>
  );
}
