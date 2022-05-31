import React from 'react';

import Spinner from '../../atoms/Spinner';

function PageSpinner() {
  return (
    <div className="flex fixed top-[var(--header-height)] left-0 justify-center items-center w-screen h-[calc(100vh-var(--header-height))]">
      <Spinner />
    </div>
  );
}

export default PageSpinner;
