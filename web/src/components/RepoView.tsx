import React from 'react';
import { Repo } from '../models/Repo';
import { LatestCommit } from './LatestCommit';
import { ReadmeViewer } from './markdown/ReadmeViewer';

interface RepoViewProps {
  repo: Repo;
  returnToRootHandler: () => void;
}

export function RepoView({
  repo,
  returnToRootHandler,
}: RepoViewProps): React.ReactElement<any, any> {
  return (
    <div className="max-w-screen-lg mx-auto w-full">
      <button
        onClick={returnToRootHandler}
        className="mb-2 px-4 py-1 bg-gray-300 shadow font-bold hover:bg-gray-400 transition-colors focus:text-blue-800 focus:underline"
      >
        Go Back to All Repositories
      </button>
      <h2 className="text-xl mb-4">
        Repository Name: <span className="font-bold">{repo.name}</span>
      </h2>
      <LatestCommit id={repo.id} commitsUrl={repo.commits_url} />
      <ReadmeViewer repoFullName={repo.full_name} />
    </div>
  );
}
