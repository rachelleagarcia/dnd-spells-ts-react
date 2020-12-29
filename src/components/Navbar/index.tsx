import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarDiv } from './navbar.styled';

const Navbar = () => {
  return (
    <NavbarDiv>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/favourites">
        Favourites
      </NavLink>
    </NavbarDiv>
  );
};

export default memo(Navbar);
