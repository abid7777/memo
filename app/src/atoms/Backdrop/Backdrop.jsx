/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

const DEFAULT_PROPS = {
  'aria-label': 'close backdrop',
  role: 'button',
  tabIndex: 0,
  className: 'overflow-auto fixed top-0 left-0 z-40 w-screen min-h-screen bg-gray-800/50 backdrop-blur-lg',
};

function div({ ...props }) {
  return <div {...props} />;
}

function Backdrop({
  as, className, onClick, ...restProps
}) {
  const Component = as || div;

  return (
    <Component
      {...DEFAULT_PROPS}
      className={`${DEFAULT_PROPS.className} ${className}`}
      {...restProps}
      onClick={onClick}
      onTouchStart={onClick}
    />
  );
}

Backdrop.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Backdrop.defaultProps = {
  as: null,
  className: '',
  onClick: _noop,
};

export default Backdrop;
