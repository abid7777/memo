import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import React from 'react';

import NavbarMenuItem, { VARIANTS } from '../../atoms/NavbarMenuItem/NavbarMenuItem';

function NavbarMenu() {
  return (
    <ul className="flex gap-5">
      <li>
        <NavbarMenuItem href="/" variant={VARIANTS.LINK}>
          <BsSearch size={14} className="transition-transform group-hover:scale-150" />
        </NavbarMenuItem>
      </li>
      <li>
        <NavbarMenuItem variant={VARIANTS.BUTTON}>
          <BiUser size={14} className="transition-transform group-hover:scale-150" />
        </NavbarMenuItem>
      </li>
    </ul>
  );
}

export default NavbarMenu;
