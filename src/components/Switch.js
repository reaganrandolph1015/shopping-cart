import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Cart from './Cart';

const Switch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switch;
