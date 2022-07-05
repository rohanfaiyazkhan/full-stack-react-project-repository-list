import React, { useEffect } from 'react';
import { useCache } from '../context/cacheContext';
import { LOADING_STATES } from '../models/LoadingStates';
import { useFetchCommitCallback } from '../requests/useFetchCommitsCallback';
import { findLatestCommit } from '../utils/findLatestCommit';
import { ErrorView } from './ErrorView';
import { LoadingSpinner } from './loading/LoadingSpinner';

interface LatestCommitProps {
  id: number;
  commitsUrl: string;
}

export function LatestCommit({
  id,
  commitsUrl,
}: LatestCommitProps): React.ReactElement<any, any> {
  const cacheState = useCache()?.commits;

  const fetchCommitsCallback = useFetchCommitCallback({
    id,
    url: commitsUrl,
    debug: process.env.NODE_ENV === 'development',
  });

  const commitsResource = cacheState?.[id];
  const isCommitLoading =
    commitsResource?.loadingState === LOADING_STATES.LOADING;
  const isCommitFailed =
    commitsResource?.loadingState === LOADING_STATES.FAILURE;
  const commitsRequestOn = commitsResource?.requestOn;

  // If commits has not been requested on component mount, make the request
  useEffect(() => {
    if (!commitsRequestOn) {
      fetchCommitsCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const latestCommit = commitsResource?.resource
    ? findLatestCommit(commitsResource.resource)
    : undefined;

  return (
    <>
      {isCommitLoading ? (
        <p className="bg-gray-200 px-2 py-2 flex">
          <LoadingSpinner className="mr-4" /> Loading Latest Commit
        </p>
      ) : isCommitFailed ? (
        <ErrorView className="mx-0">
          Unable to fetch latest commit.
          <button
            className="inline font-bold hover:underline focus:underline"
            onClick={fetchCommitsCallback}
          >
            Please click here to try again.
          </button>
        </ErrorView>
      ) : (
        latestCommit && (
          <div className="bg-blue-200 px-2 py-2 mb-4 lg:mb-6">
            <h3 className="text-lg">Latest Commit</h3>
            <p className="text-sm">
              By {latestCommit.commit.author.name} on{' '}
              {new Date(latestCommit.commit.author.date).toLocaleDateString()}
            </p>
            <p className="italic">"{latestCommit.commit.message}"</p>
          </div>
        )
      )}
    </>
  );
}
