import React from 'react';
import { useReducer } from 'react';
import { cacheContext, dispatchContext } from '../../context/cacheContext';
import { cacheReducer, initialCacheState } from '../../context/cacheReducer';

// Wrapper for cache providers to abstract context logic away from App
export function CacheContextWrapper(
  props: React.PropsWithChildren<any>
): React.ReactElement<any, any> {
  const [state, dispatch] = useReducer(cacheReducer, initialCacheState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <cacheContext.Provider value={state}>
        {props.children}
      </cacheContext.Provider>
    </dispatchContext.Provider>
  );
}
