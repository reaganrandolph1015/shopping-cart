import React from 'react';
import uniqid from 'uniqid';
import CP from '../imgs/CP.jpg';
import TS from '../imgs/travis.jpg';
import AM from '../imgs/Airmax.webp';
import AF from '../imgs/Airforce.png';
import NB from '../imgs/Newbalance.png';

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
  const airmax = createCard(AM, 'Nike Airmax', '100', uniqid());
  const airforce = createCard(AF, 'Nike Airforce 1', '100', uniqid());
  const newBalance = createCard(NB, 'New Balance 550', '120', uniqid());

  cardArray.push(common, trav, airmax, airforce, newBalance);

  return cardArray;
};

export default Cards;
