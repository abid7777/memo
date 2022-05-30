import React from 'react';

import { HEADER_HEIGHT } from '../../App.constants';
import Spinner from '../../atoms/Spinner';

function PageSpinner() {
  return (
    <div className={`flex fixed top-[${HEADER_HEIGHT}] left-0 justify-center items-center w-screen h-screen`}>
      <Spinner />
    </div>
  );
}

export default PageSpinner;
