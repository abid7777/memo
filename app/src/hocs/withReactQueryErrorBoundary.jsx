/* eslint-disable react/jsx-props-no-spreading */

import { QueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';

export default function withReactQueryErrorBoundaryHOC(Component, Fallback) {
  return function withReactQueryErrorBoundary(props) {
    return (
      <QueryErrorResetBoundary>
        {
        ({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={
              ({ ...fallbackRenderProps }) => <Fallback {...fallbackRenderProps} />
            }
          >
            <Component {...props} />
          </ErrorBoundary>
        )
      }
      </QueryErrorResetBoundary>
    );
  };
}
