import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { ResourceContainer } from '../../models/DataCache';
import { LOADING_STATES } from '../../models/LoadingStates';
import { getCurrentTimeStamp } from '../../utils/dateTime';
import { LoadingSpinner } from '../loading/LoadingSpinner';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ReadmeViewerProps {
  repoFullName: string;
}

function getReadmeUrl(repoFullName: string) {
  return `https://raw.githubusercontent.com/${repoFullName}/master/README.md`;
}

export function ReadmeViewer({
  repoFullName,
}: ReadmeViewerProps): React.ReactElement<any, any> | null {
  const readmeUrl = getReadmeUrl(repoFullName);
  const [state, setState] = useState<ResourceContainer<string>>({});

  useEffect(() => {
    const readmePromise = axios.get<string>(readmeUrl);

    setState({
      requestOn: getCurrentTimeStamp(),
      loadingState: LOADING_STATES.LOADING,
    });

    readmePromise
      .then((res) => {
        setState((prev) => ({
          ...prev,
          fetchedOn: getCurrentTimeStamp(),
          loadingState: LOADING_STATES.SUCCESS,
          resource: res.data,
        }));
      })
      .catch((err: AxiosError) => {
        setState((prev) => ({
          ...prev,
          failedOn: getCurrentTimeStamp(),
          loadingState: LOADING_STATES.FAILURE,
          error: err.message,
        }));
      });

    // I don't really want to enable multiple attempts at loading the markdown so for now I'll only do it on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    state.loadingState === LOADING_STATES.FAILURE ||
    (state.loadingState === LOADING_STATES.SUCCESS &&
      state.resource === undefined)
  ) {
    return null;
  }

  return (
    <div className="border-b rounded border-gray-700">
      {state.loadingState === LOADING_STATES.LOADING ? (
        <p className="flex">
          <LoadingSpinner className="mr-4" /> Loading README.md
        </p>
      ) : (
        state.resource !== undefined && (
          <>
            <h3 className="text-lg font-bold mb-4">README.md</h3>
            <MarkdownRenderer markdown={state.resource} />
          </>
        )
      )}
    </div>
  );
}
