/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

export default function withGeneralErrorTargetHOC(Component, errorTarget) {
  return function withGeneralErrorTarget(props) {
    return (
      <Component {...props} errorTarget={errorTarget} />
    );
  };
}
