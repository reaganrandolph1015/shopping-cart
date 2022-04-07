import React from 'react';
import Popup from 'reactjs-popup';
import uniqid from 'uniqid';
import PopupContainer from './PopupContainer';
import CP from '../imgs/CP.jpg';
import TS from '../imgs/travis.jpg';
import AM from '../imgs/Airmax.webp';
import AF from '../imgs/Airforce.png';
import NB from '../imgs/Newbalance.png';
import UB from '../imgs/Ultraboost.png';

const Cards = ({ addItem, subtractItem }) => {
  let cardArray = [];

  const createCard = (src, text, price, key) => (
    <div className="card">
      <img className="card-image" src={src} alt="card-img" />
      <h3 className="card-name">{text}</h3>
      <p className="card-price">{`$${price}`}</p>
    </div>
  );

  function popupCard(card) {
    return (
      <Popup
        trigger={
          <button type="button" className="popup-card">
            {card}
          </button>
        }
      >
        <div>
          <PopupContainer addItem={addItem} subtractItem={subtractItem} />
        </div>
      </Popup>
    );
  }

  // Variables for shoe cards
  const common = createCard(CP, 'Common Projects', '305', uniqid());
  const trav = createCard(TS, 'Air Jordan 1 Travis Scott', '2500', uniqid());
  const airmax = createCard(AM, 'Nike Airmax', '100', uniqid());
  const airforce = createCard(AF, 'Nike Airforce 1', '100', uniqid());
  const newBalance = createCard(NB, 'New Balance 550', '120', uniqid());
  const ultraboost = createCard(UB, 'Ultraboost 22', '200', uniqid());

  // Variables for popup cards
  const commonP = popupCard(common);
  const travP = popupCard(trav);
  const airmaxP = popupCard(airmax);
  const airforceP = popupCard(airforce);
  const newBalanceP = popupCard(newBalance);
  const ultraboostP = popupCard(ultraboost);

  // add created shoe cards to existing array
  cardArray.push(commonP, travP, airmaxP, airforceP, newBalanceP, ultraboostP);

  return cardArray;
};

export default Cards;
