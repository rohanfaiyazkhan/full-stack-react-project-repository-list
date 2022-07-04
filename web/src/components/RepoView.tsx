import React from 'react';
import { Repo } from '../models/Repo';

interface RepoViewProps {
  repo: Repo;
  returnToRootHandler: () => void;
}

export function RepoView(props: RepoViewProps): React.ReactElement<any, any> {
  return <div />;
}
