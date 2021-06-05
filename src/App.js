import React from 'react';

import './App.css';
import CardData from './CardData/CardData';
import Navbar from './Navbar/Navbar';

import Data from './data.json';

const App = () => {
  return (
    <div className="root">
      <Navbar name={Data.name} />
      <CardData name={Data.name} about={Data.aboutMe} greeting={Data.greeting} />
    </div>
  )
}

export default App;
