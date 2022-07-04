import React, { CSSProperties } from 'react';
import cx from 'classnames';
import LoadingIcon from '../../icons/LoadingIcon';

interface LoadingSpinnerProps {
  className?: string;
  style?: CSSProperties;
}

export function LoadingSpinner(
  props: LoadingSpinnerProps
): React.ReactElement<any, any> {
  return (
    <span className={cx('animate-spin', props.className)} style={props.style}>
      <LoadingIcon className="w-4 h-4" />
    </span>
  );
}
