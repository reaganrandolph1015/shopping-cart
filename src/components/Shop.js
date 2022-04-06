import React from 'react';
import Cards from './Cards';

const Shop = ({ addItem, subtractItem }) => {
  return (
    <div>
      <h1 className="route-title">SHOES</h1>
      <div className="card-container">
        <Cards addItem={addItem} subtractItem={subtractItem} />
      </div>
    </div>
  );
};

export default Shop;
