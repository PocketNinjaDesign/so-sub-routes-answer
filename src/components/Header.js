import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
  return (
    <header>
      <NavLink
        activeClassName="active"
        to="/login">Login</NavLink>
      <NavLink
        activeClassName="active"
        to="/dashboard">Viewport</NavLink>
    </header>
  )
}