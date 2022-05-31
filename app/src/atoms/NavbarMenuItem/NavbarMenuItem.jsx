import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import _noop from 'lodash/noop';

import Button, { VARIANTS as BUTTON_VARIANTS } from '../Button';
import PropertyControlledComponent from '../PropertyControlledComponent/PropertyControlledComponent';

const VARIANTS = Object.freeze({
  BUTTON: 0,
  LINK: 1,
});

function NavbarMenuItem({
  children, className, href, variant, onClick,
}) {
  // TODO: add warning if variant is Link and href is not provided, its bad for SEO and performance

  return (
    <>
      <PropertyControlledComponent shouldRender={variant === VARIANTS.LINK}>
        <NavLink
          to={href}
          className={({ isActive }) => cx(
            'group navbar-menu-item',
            { 'navbar-menu-item-active': isActive },
            className,
          )}
        >
          {children}
        </NavLink>
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={variant === VARIANTS.BUTTON}>
        <Button
          className={`group navbar-menu-item ${className}`}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={onClick}
        >
          {children}
        </Button>
      </PropertyControlledComponent>
    </>
  );
}

NavbarMenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  onClick: PropTypes.func,
};

NavbarMenuItem.defaultProps = {
  className: '',
  href: '',
  variant: VARIANTS.LINK,
  onClick: _noop,
};

export default NavbarMenuItem;
export { VARIANTS };
