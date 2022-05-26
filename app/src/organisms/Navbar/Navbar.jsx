import { Link } from 'react-router-dom';
import React from 'react';

import BrandLogo from '../../atoms/BrandLogo';
import NavbarMenu from '../../molecules/NavbarMenu/NavbarMenu';

function Navbar() {
  return (
    <div className="flex gap-5 justify-between items-center py-4 mx-auto">
      <Link to="/" className="inline-block" aria-label="home"><BrandLogo /></Link>
      <NavbarMenu />
    </div>
  );
}

export default Navbar;
