import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <h1 className="route-title">Home</h1>
      <div className="nav">
        <Nav />
      </div>
    </div>
  );
};

export default App;
