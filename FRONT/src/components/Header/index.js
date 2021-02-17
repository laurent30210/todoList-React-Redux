// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
// == Import
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <NavLink
      className="header__item"
      exact
      target="_blank"
      to="/repo-github-laurent-darlet"
    >
      Repo TodoList Github
    </NavLink>
    <NavLink
      className="header__item"
      exact
      target="_blank"
      to="/laurent-darlet"
    >
      Linkedin
    </NavLink>
  </header>
);

// == Export
export default Header;
