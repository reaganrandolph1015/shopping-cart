import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Cart from './Cart';
import About from './About';
import Header from './Header';

const Switch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switch;
