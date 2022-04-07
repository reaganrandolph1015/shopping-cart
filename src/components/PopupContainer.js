import React from 'react';

const PopupContainer = ({ addItem, subtractItem }) => (
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

export default PopupContainer;
