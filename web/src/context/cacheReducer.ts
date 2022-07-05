import { ApiError } from '../models/ApiError';
import { Commit } from '../models/Commit';
import { DataCache } from '../models/DataCache';
import { DispatchedAction } from '../models/DispatchedAction';
import { LOADING_STATES } from '../models/LoadingStates';
import { Repo } from '../models/Repo';
import { formatDate, getCurrentTimeStamp } from '../utils/dateTime';
import { CACHE_ACTION_TYPES } from './CacheActionTypes';

// Initially setting state to empty, but this can be initialize from localstorage if offline caching is desired
export const initialCacheState: DataCache = {};

export function cacheReducer(
  state = initialCacheState,
  action: DispatchedAction
): DataCache {
  const timestamp = getCurrentTimeStamp();

  if (action.debug) {
    console.debug(
      `[${formatDate(new Date())} -- ${action.type}]:`,
      action.payload
    );
  }

  switch (action.type) {
    case CACHE_ACTION_TYPES.REPOSITORIES_REQUEST:
      return {
        ...state,
        repositories: {
          ...state?.repositories,
          requestOn: timestamp,
          loadingState: LOADING_STATES.LOADING,
        },
      };
    case CACHE_ACTION_TYPES.REPOSITORIES_REQUEST_SUCCESS:
      return {
        ...state,
        repositories: {
          ...state?.repositories,
          loadingState: LOADING_STATES.SUCCESS,
          fetchedOn: timestamp,
          resource: action?.payload?.data as Repo[],
        },
      };
    case CACHE_ACTION_TYPES.REPOSITORIES_REQUEST_FAILURE:
      return {
        ...state,
        repositories: {
          ...state?.repositories,
          loadingState: LOADING_STATES.FAILURE,
          failedOn: timestamp,
          error: action?.payload?.data as ApiError,
        },
      };
    case CACHE_ACTION_TYPES.COMMITS_REQUEST:
      if (!action.payload.id) {
        console.error('Repo ID not provided with commits request');
        return state;
      }

      return {
        ...state,
        commits: {
          ...state?.commits,
          [action.payload.id]: {
            ...state?.commits?.[action.payload.id],
            requestOn: timestamp,
            loadingState: LOADING_STATES.LOADING,
          },
        },
      };
    case CACHE_ACTION_TYPES.COMMITS_REQUEST_SUCCESS:
      if (!action.payload.id) {
        console.error('Repo ID not provided with commits request');
        return state;
      }

      return {
        ...state,
        commits: {
          ...state?.commits,
          [action.payload.id]: {
            ...state?.commits?.[action.payload.id],
            loadingState: LOADING_STATES.SUCCESS,
            fetchedOn: timestamp,
            resource: action?.payload?.response?.data as Commit[],
          },
        },
      };
    case CACHE_ACTION_TYPES.COMMITS_REQUEST_FAILURE:
      if (!action.payload.id) {
        console.error('Repo ID not provided with commits request');
        return state;
      }

      return {
        ...state,
        commits: {
          ...state?.commits,
          [action.payload.id]: {
            ...state?.commits?.[action.payload.id],
            loadingState: LOADING_STATES.FAILURE,
            failedOn: timestamp,
            error: action?.payload?.error as ApiError,
          },
        },
      };
    default:
      return state;
  }
}
