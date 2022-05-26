import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import PropertyControlledComponent from '../PropertyControlledComponent/PropertyControlledComponent';

const VARIANTS = Object.freeze({
  BUTTON: 0,
  LINK: 1,
});

function NavbarMenuItem({
  className, children, variant, href, onClick,
}) {
  return (
    <>
      <PropertyControlledComponent shouldRender={variant === VARIANTS.LINK}>
        <Link to={href} className={`group navbar-menu-item ${className}`}>
          {children}
        </Link>
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={variant === VARIANTS.BUTTON}>
        <button type="button" className={`group navbar-menu-item ${className}`} onClick={onClick}>
          {children}
        </button>
      </PropertyControlledComponent>
    </>
  );
}

NavbarMenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  href: PropTypes.string,
  onClick: PropTypes.func,
};

NavbarMenuItem.defaultProps = {
  className: '',
  variant: VARIANTS.LINK,
  href: '#',
  onClick: _noop,
};

export default NavbarMenuItem;
export { VARIANTS };
