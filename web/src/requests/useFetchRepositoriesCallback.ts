import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { CACHE_ACTION_TYPES } from '../context/CacheActionTypes';
import { useDispatch } from '../context/cacheContext';
import { ApiError } from '../models/ApiError';
import { fetchRepositories } from './fetchRepositories';

interface UseFetchRepositoriesParams {
  debug?: boolean;
}

export function useFetchRepositoriesCallback(
  params?: UseFetchRepositoriesParams
) {
  const dispatch = useDispatch();
  const debug = params?.debug ?? false;

  return useCallback(() => {
    const fetchPromise = fetchRepositories();
    dispatch({
      type: CACHE_ACTION_TYPES.REPOSITORIES_REQUEST,
    });

    fetchPromise
      .then((res) => {
        dispatch({
          type: CACHE_ACTION_TYPES.REPOSITORIES_REQUEST_SUCCESS,
          payload: res,
          debug,
        });
      })
      .catch((err: AxiosError<ApiError>) => {
        dispatch({
          type: CACHE_ACTION_TYPES.REPOSITORIES_REQUEST_FAILURE,
          payload: err.message,
          debug,
        });
      });
  }, [debug, dispatch]);
}
