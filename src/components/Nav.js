import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/cart">Shopping Cart</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
