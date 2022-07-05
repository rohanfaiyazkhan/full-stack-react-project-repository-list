import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { CACHE_ACTION_TYPES } from '../context/CacheActionTypes';
import { useDispatch } from '../context/cacheContext';
import { ApiError } from '../models/ApiError';
import { fetchCommits } from './fetchCommits';

interface UseFetchCommitParams {
  id: number;
  url: string;
  debug?: boolean;
}

export function useFetchCommitCallback(params: UseFetchCommitParams) {
  const dispatch = useDispatch();
  const debug = params.debug ?? false;
  const id = params.id;
  const url = params.url;

  return useCallback(() => {
    const fetchPromise = fetchCommits(url);
    dispatch({
      type: CACHE_ACTION_TYPES.COMMITS_REQUEST,
      payload: {
        id,
      },
    });

    fetchPromise
      .then((res) => {
        dispatch({
          type: CACHE_ACTION_TYPES.COMMITS_REQUEST_SUCCESS,
          payload: {
            id,
            response: res,
          },
          debug,
        });
      })
      .catch((err: AxiosError<ApiError>) => {
        dispatch({
          type: CACHE_ACTION_TYPES.COMMITS_REQUEST_FAILURE,
          payload: {
            id,
            error: err.message,
          },
          debug,
        });
      });
  }, [debug, dispatch, id, url]);
}
