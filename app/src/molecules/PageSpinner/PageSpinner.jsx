import React from 'react';

import Spinner from '../../atoms/Spinner';

function PageSpinner() {
  return (
    <div className="flex fixed top-[80px] left-0 justify-center items-center w-screen h-screen">
      <Spinner />
    </div>
  );
}

export default PageSpinner;
