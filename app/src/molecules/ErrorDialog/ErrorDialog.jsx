import { IoMdRefresh } from 'react-icons/io';
import PropTypes from 'prop-types';
import React from 'react';
import _isFunction from 'lodash/isFunction';

import Button, { VARIANTS } from '../../atoms/Button';
import PropertyControlledComponent from '../../atoms/PropertyControlledComponent';

function ErrorDialog({
  body, children, title, onTryAgain, renderTitle, renderBody,
}) {
  return (
    <>
      <PropertyControlledComponent shouldRender={children}>
        {children}
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={!children}>
        <div>
          <div className="p-4 mx-auto max-w-lg text-red-600 bg-red-200 rounded-md shadow-lg">
            <h3 className="pb-2 text-2xl border-b border-b-red-600">
              {/* TODO: pass props if required */}
              {_isFunction(renderTitle) ? renderTitle() : title}
            </h3>
            <div className="mt-4">
              {/* TODO: pass props if required */}
              {_isFunction(renderBody) ? renderBody() : body}
            </div>
            <div className="mt-8">
              <Button onClick={onTryAgain} variant={VARIANTS.DANGER} className="flex gap-1 justify-center items-center">
                <span>Try Again</span>
                <IoMdRefresh />
              </Button>
            </div>
          </div>
        </div>
      </PropertyControlledComponent>
    </>
  );
}

ErrorDialog.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  onTryAgain: PropTypes.func.isRequired,
  renderTitle: PropTypes.func,
  renderBody: PropTypes.func,
};

ErrorDialog.defaultProps = {
  body: '',
  children: null,
  title: '',
  renderTitle: null,
  renderBody: null,
};

export default ErrorDialog;
