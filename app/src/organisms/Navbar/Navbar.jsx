import React from 'react';

import BrandLogo from '../../atoms/BrandLogo';
import NavbarMenu from '../../molecules/NavbarMenu/NavbarMenu';

function Navbar() {
  return (
    <div className="flex gap-5 justify-between items-center py-4 mx-auto">
      <a href="/" className="inline-block">
        <BrandLogo />
      </a>
      <div>
        <NavbarMenu />
      </div>
    </div>
  );
}

export default Navbar;
