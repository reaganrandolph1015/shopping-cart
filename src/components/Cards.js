import React from 'react';
import uniqid from 'uniqid';
import CP from '../imgs/CP.jpg';
import TS from '../imgs/travis.jpg';
import AM from '../imgs/Airmax.webp';
import AF from '../imgs/Airforce.png';
import NB from '../imgs/Newbalance.png';
import UB from '../imgs/Ultraboost.png';
import Popup from 'reactjs-popup';

const Cards = ({ addItem, subtractItem }) => {
  let cardArray = [];

  const createCard = (src, text, price, key) => (
    <Popup
      trigger={
        <button className="popup-card">
          <div className="card">
            <img className="card-image" src={src} alt="card-img" />
            <h3 className="card-name">{text}</h3>
            <p className="card-price">{`$${price}`}</p>
          </div>
        </button>
      }
      key={key}
    >
      {popupContainer}
    </Popup>
  );

  const popupContainer = () => (
    <div className="popup-container">
      <button
        type="button"
        className="popup-input-buttons"
        onClick={subtractItem}
      >
        -
      </button>
      <input type="text" className="popup-input"></input>
      <button type="button" className="popup-input-buttons" onClick={addItem}>
        +
      </button>
    </div>
  );

  // Variables for shoe cards
  const common = createCard(CP, 'Common Projects', '305', uniqid());
  const trav = createCard(TS, 'Air Jordan 1 Travis Scott', '2500', uniqid());
  const airmax = createCard(AM, 'Nike Airmax', '100', uniqid());
  const airforce = createCard(AF, 'Nike Airforce 1', '100', uniqid());
  const newBalance = createCard(NB, 'New Balance 550', '120', uniqid());
  const ultraboost = createCard(UB, 'Ultraboost 22', '200', uniqid());

  // add created shoe cards to existing array
  cardArray.push(common, trav, airmax, airforce, newBalance, ultraboost);

  return cardArray;
};

export default Cards;
