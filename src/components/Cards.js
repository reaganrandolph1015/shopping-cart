import React from 'react';
import uniqid from 'uniqid';
import CP from '../imgs/CP.webp';
import TS from '../imgs/travis.jpg';

const Cards = () => {
  let cardArray = [];

  const createCard = (src, text, price, key) => (
    <div className="card" key={key}>
      <img className="card-image" src={src} alt="card-img" />
      <h3 className="card-name">{text}</h3>
      <p className="card-price">{`$${price}`}</p>
    </div>
  );

  const common = createCard(CP, 'Common Projects', '305', uniqid());
  const trav = createCard(TS, "Travis Scott's", '2500', uniqid());

  cardArray.push(common, trav);

  return cardArray;
};

export default Cards;
