/* eslint-disable react/jsx-props-no-spreading */

import React, { Suspense } from 'react';
import PageSpinner from '../molecules/PageSpinner';

export default function withSuspenseHOC(Component, fallback) {
  return function withSuspense(props) {
    return (
      <Suspense fallback={typeof fallback !== 'undefined' ? fallback : <PageSpinner />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
