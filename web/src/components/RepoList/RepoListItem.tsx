import React from 'react';
import { Repo } from '../../models/Repo';

interface RepoListItemProps {
  repo: Repo;
  index: number;
  navigateHandler: (index: number) => void;
}

export const REPO_LIST_ITEM_DATA_INDEX_KEY = 'data-index';

export function RepoListItem({
  repo,
  index,
  navigateHandler,
}: RepoListItemProps): React.ReactElement<any, any> {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigateHandler(index);
  };

  return (
    <li className="my-1 lg:my-0">
      <button
        onClick={onClick}
        className="text-left bg-gray-300 hover:bg-blue-200 focus:bg-blue-300 transition-colors px-4 py-4 shadow-lg rounded w-full lg:max-w-sm h-full flex flex-col"
      >
        <p className="font-bold text-lg mb-1">{repo.name}</p>
        <p className="text-sm mb-2 flex-grow">{repo.description}</p>
        <div className="flex justify-end items-center">
          <p className="text-sm mr-2">
            Forked {repo.forks_count} {repo.forks_count > 1 ? 'times' : 'time'}
          </p>
          {repo.language && (
            <div className="px-2 py-1 border-2 border-gray-600">
              {repo.language}
            </div>
          )}
        </div>
      </button>
    </li>
  );
}
