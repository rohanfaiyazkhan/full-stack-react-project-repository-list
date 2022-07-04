import React, { useContext } from 'react';
import { DataCache } from '../models/DataCache';
import { DispatchedAction } from '../models/DispatchedAction';

export type Dispatch = (action: DispatchedAction) => void;

export const cacheContext = React.createContext<DataCache>({});
export const dispatchContext = React.createContext<Dispatch>(() => undefined);

// Hook wrappers for consumption
export function useDispatch() {
  return useContext(dispatchContext);
}

export function useCache() {
  return useContext(cacheContext);
}
