import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

const App = () => {
  const [items, setItems] = useState(0);

  // Manipulate items state
  const addItem = (e) => {
    setItems(items + 1);
  };
  const subtractItem = () => setItems(items - 1);

  return (
    <BrowserRouter>
      <Header items={items} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={<Shop addItem={addItem} subtractItem={subtractItem} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
