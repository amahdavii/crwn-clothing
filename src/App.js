import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/Homepage.component';

import './App.css';

const HatsPage = () => (
 <div>
   <h1>HATS PAGE</h1>
 </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
