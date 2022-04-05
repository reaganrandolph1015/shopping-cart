import React from 'react';
import { useState } from 'react';

const Items = () => {
  const [items, setItems] = useState([]);

  const addItem = () => setItems(items + 1);

  const subtractItem = () => setItems(items - 1);
};

export default Items;
