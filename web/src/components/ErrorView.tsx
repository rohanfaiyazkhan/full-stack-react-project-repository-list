import React from 'react';
import cx from 'classnames';
import ErrorIcon from '../icons/ErrorIcon';

export function ErrorView(
  props: React.PropsWithChildren<any>
): React.ReactElement<any, any> {
  return (
    <div
      className={cx(
        'rounded shadow-sm flex w-full max-w-md mx-auto my-4',
        props.className
      )}
    >
      <span className="bg-red-600 text-red-100 px-2 py-1 flex justify-center items-center">
        <ErrorIcon className="w-8 h-8" />
      </span>
      <span className="flex-grow px-2 py-2 bg-red-300 text-red-900">
        {props.children}
      </span>
    </div>
  );
}
