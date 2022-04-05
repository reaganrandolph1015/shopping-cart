import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ items }) => {
  return (
    <div className="header-container">
      <h1 className="shop-name">TITLE</h1>
      <div className="nav-container">
        <Link to="/" onClick={(e) => e.blur()}>
          HOME
        </Link>
        <Link to="/cart" onClick={(e) => e.blur()}>
          SHOP
        </Link>
        <Link to="/about" onClick={(e) => e.blur()}>
          ABOUT
        </Link>
      </div>
      <div className="counter">
        <h1>🛒 {items}</h1>
      </div>
    </div>
  );
};

export default Header;
