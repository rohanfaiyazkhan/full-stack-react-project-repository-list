import { useCallback, useState } from 'react';

export const NAV_STATE_TYPES = Object.freeze({
  ROOT: 'ROOT',
  VIEWING_REPO: 'VIEWING_REPO',
});

interface NavigationState {
  state: string;
  repoIndex: number;
}

const initialState: NavigationState = {
  state: NAV_STATE_TYPES.ROOT,
  repoIndex: -1,
};

type NavigationStateReturnTuple = [
  NavigationState,
  () => void,
  (index: number) => void
];

/**
 * Wrapper for setting primary navigation state that returns the state and callbacks for chaning state
 * @returns Tuple of state, return to root handler and view repository handler
 */
export function useNavigationState(): NavigationStateReturnTuple {
  const [state, setState] = useState<NavigationState>(initialState);

  const returnToRoot = useCallback(() => {
    // If window history was manipulated (see viewRepo), pop history stack
    if (window.history.state?.state === NAV_STATE_TYPES.VIEWING_REPO) {
      window.history.back();
    }

    setState(initialState);
  }, []);

  const viewRepo = useCallback((index: number) => {
    const newState = {
      state: NAV_STATE_TYPES.VIEWING_REPO,
      repoIndex: index,
    };

    // Pushing to history state so that pressing back can return to root view
    const url = new URL(window.location.toString());
    url.searchParams.set('viewing', index.toString());
    window.history.pushState(newState, '', url);

    setState(newState);
  }, []);

  return [state, returnToRoot, viewRepo];
}
