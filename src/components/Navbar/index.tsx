import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { NavbarDiv } from './navbar.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: 'favourites', text: 'Favourites' },
];

const Navbar = () => {
  return (
    <NavbarDiv>
      <ul>
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </NavbarDiv>
  );
};

export default memo(Navbar);
