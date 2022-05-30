import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import _get from 'lodash/get';
import _noop from 'lodash/noop';

import { VARIANTS, STYLES } from './Button.constants';

function Button({
  children, className, rounded, variant, onClick,
}) {
  return (
    <button
      type="button"
      className={cx(
        `block px-4 py-2 ${_get(STYLES, variant, '')}`,
        { 'rounded-full': rounded },
        className,
      )}
      onClick={onClick}
      onTouchStart={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(VARIANTS)).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  rounded: false,
  onClick: _noop,
};

export default Button;
