import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { HiPencil } from 'react-icons/hi';
import React from 'react';

import NavbarMenuItem, { VARIANTS } from '../../atoms/NavbarMenuItem/NavbarMenuItem';

function NavbarMenu() {
  return (
    <ul className="flex gap-5">
      <li className="fixed right-2 bottom-5 z-50 mx-auto lg:static">
        <NavbarMenuItem
          href="/posts/create"
          variant={VARIANTS.LINK}
        >
          <HiPencil />
        </NavbarMenuItem>
      </li>
      <li>
        <NavbarMenuItem href="/posts/search" variant={VARIANTS.LINK}>
          <BsSearch size={14} />
        </NavbarMenuItem>
      </li>
      <li>
        <NavbarMenuItem variant={VARIANTS.LINK} href="/profile/me">
          <BiUser size={14} />
        </NavbarMenuItem>
      </li>
    </ul>
  );
}

export default NavbarMenu;
