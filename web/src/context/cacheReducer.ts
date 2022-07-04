import { AxiosResponse } from 'axios';
import { ApiError } from '../models/ApiError';
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
  action: DispatchedAction<string, AxiosResponse<Repo[] | ApiError>>
): DataCache {
  const timestamp = getCurrentTimeStamp();

  if (action.debug) {
    console.debug(
      `[${formatDate(new Date())} -- ${action.type}]:`,
      action.payload
    );
  }

  switch (action.type) {
    case CACHE_ACTION_TYPES.REQUEST:
      return {
        ...state,
        requestOn: timestamp,
        loadingState: LOADING_STATES.LOADING,
      };
    case CACHE_ACTION_TYPES.REQUEST_SUCCESS:
      return {
        ...state,
        loadingState: LOADING_STATES.SUCCESS,
        fetchedOn: timestamp,
        resource: action?.payload?.data as Repo[],
      };
    case CACHE_ACTION_TYPES.REQUEST_FAILURE:
      return {
        ...state,
        loadingState: LOADING_STATES.FAILURE,
        failedOn: timestamp,
        error: action?.payload?.data as ApiError,
      };
    default:
      return state;
  }
}
