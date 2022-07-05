import { useCallback, useState } from 'react';

export const NAV_STATE_TYPES = Object.freeze({
  ROOT: 'ROOT',
  VIEWING_REPO: 'VIEWING_REPO',
});

interface NavigationState {
  // State is one of NAV_STATE_TYPES
  state: string;

  // If viewing a repository, which one?
  repoIndex: number;

  // Filtering by which language
  filterLanguage?: string;
}

const initialState: NavigationState = {
  state: NAV_STATE_TYPES.ROOT,
  repoIndex: -1,
};

type NavigationStateReturnTuple = [
  NavigationState,
  () => void,
  (index: number) => void,
  (filterLanguage?: string) => void
];

/**
 * Wrapper for setting primary navigation state that returns the state and callbacks for chaning state
 * @returns Tuple of state, return to root handler and view repository handler
 */
export function useNavigationState(): NavigationStateReturnTuple {
  const [state, setState] = useState<NavigationState>(initialState);

  const returnToRoot = useCallback(() => {
    setState((prev) => ({
      ...prev,
      ...initialState,
    }));
  }, []);

  const viewRepo = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      state: NAV_STATE_TYPES.VIEWING_REPO,
      repoIndex: index,
    }));
  }, []);

  const setLanguageFilter = useCallback((filterLanguage?: string) => {
    setState((prev) => ({
      ...prev,
      filterLanguage: filterLanguage ?? undefined,
    }));
  }, []);

  return [state, returnToRoot, viewRepo, setLanguageFilter];
}
