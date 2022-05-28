import { IoMdRefresh } from 'react-icons/io';
import PropTypes from 'prop-types';
import React from 'react';

import Button, { VARIANTS } from '../../atoms/Button';

function ErrorDialog({ title, body, onTryAgain }) {
  return (
    <div>
      <div className="p-4 mx-auto max-w-lg text-red-600 bg-red-200 rounded-md shadow-lg">
        <h3 className="pb-2 text-2xl border-b border-b-red-600">{title}</h3>
        <div className="mt-4">{body}</div>
        <div className="mt-8">
          <Button onClick={onTryAgain} variant={VARIANTS.DANGER} className="flex gap-1 justify-center items-center">
            <span>Try Again</span>
            <IoMdRefresh />
          </Button>
        </div>
      </div>
    </div>
  );
}

ErrorDialog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onTryAgain: PropTypes.func.isRequired,
};

export default ErrorDialog;
