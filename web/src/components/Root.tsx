import React, { useEffect } from 'react';
import { useCache } from '../context/cacheContext';
import { LOADING_STATES } from '../models/LoadingStates';
import { useFetchRepositoriesCallback } from '../requests/useFetchRepositoriesCallback';
import { readUnixTimestamp } from '../utils/dateTime';
import { getAllUniqueLanguagesInRepos } from '../utils/getAllUniqueLanguagesInRepos';
import {
  NAV_STATE_TYPES,
  useNavigationState,
} from '../utils/hooks/useNavigationState';
import { ErrorView } from './ErrorView';
import { LanguageSelect } from './LanguageSelect';
import { LoadingView } from './loading/LoadingView';
import { RepoList } from './RepoList/RepoList';
import { RepoView } from './RepoView';

export function Root(
  props: Record<string, never>
): React.ReactElement<any, any> {
  const [nav, returnToRoot, viewRepository, setLanguageFilter] =
    useNavigationState();

  const cacheState = useCache();

  const fetchCallback = useFetchRepositoriesCallback({
    // Verbose logs when dispatching actions in dev mode
    debug: process.env.NODE_ENV === 'development',
  });

  // Fetch repositories on first load
  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  const isShowingList = nav.state === NAV_STATE_TYPES.ROOT;
  const isLoading = cacheState.loadingState === LOADING_STATES.LOADING;
  const isError = cacheState.loadingState === LOADING_STATES.FAILURE;

  const showRepositoryView =
    nav.state === NAV_STATE_TYPES.VIEWING_REPO &&
    nav.repoIndex >= 0 &&
    cacheState.resource !== undefined &&
    nav.repoIndex < cacheState.resource.length;

  const allLanguages =
    cacheState.resource !== undefined
      ? getAllUniqueLanguagesInRepos(cacheState.resource)
      : [];

  return (
    <main className="w-full max-w-screen-xl mx-auto px-2 md:px-4 xl:px-0 py-2 md:py-4 xl:py-16">
      <h1 className="text-center font-bold text-xl lg:text-3xl mb-4 lg:mb-8">
        📰 Github Repository List
      </h1>
      {isLoading ? (
        <LoadingView />
      ) : isShowingList ? (
        <>
          {isError && (
            <ErrorView>
              Sorry, we were unable to fetch repositories.{' '}
              {cacheState.resource && cacheState.resource.length > 0 && (
                <>
                  Showing stale data{' '}
                  {cacheState.fetchedOn &&
                    `from ${readUnixTimestamp(
                      cacheState.fetchedOn
                    ).toLocaleString()}`}
                  .
                </>
              )}
              <button
                className="inline font-bold hover:underline focus:underline"
                onClick={fetchCallback}
              >
                Please click here to try again.
              </button>
            </ErrorView>
          )}
          {cacheState.resource !== undefined && (
            <>
              <LanguageSelect
                languages={allLanguages}
                setLanguageFilter={setLanguageFilter}
                current={nav.filterLanguage}
              />
              <RepoList
                repos={cacheState.resource}
                navigateHandler={viewRepository}
                filterBy={nav.filterLanguage}
              />
            </>
          )}
        </>
      ) : (
        showRepositoryView && (
          <RepoView
            repo={cacheState.resource![nav.repoIndex]}
            returnToRootHandler={returnToRoot}
          />
        )
      )}
    </main>
  );
}

export default Root;
