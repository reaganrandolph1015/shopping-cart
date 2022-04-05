import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [items, setItems] = useState(1);

  return (
    <div className="header-container">
      <h1 className="shop-name">TITLE</h1>
      <div className="nav-container">
        <Link to="/">HOME</Link>
        <Link to="/cart">SHOP</Link>
        <Link to="/about">ABOUT</Link>
      </div>
      <div className="counter">
        <h1>🛒 {items}</h1>
      </div>
    </div>
  );
};

export default Header;
