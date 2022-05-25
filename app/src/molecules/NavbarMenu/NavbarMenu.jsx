import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import React from 'react';

function NavbarMenu() {
  return (
    <ul className="flex gap-5">
      <li>
        <a href="/" className="group navbar-menu-item">
          <BsSearch size={14} className="transition-transform group-hover:scale-150" />
        </a>
      </li>
      <li>
        <button type="button" className="group navbar-menu-item">
          <BiUser size={14} className="transition-transform group-hover:scale-150" />
        </button>
      </li>
    </ul>
  );
}

export default NavbarMenu;
