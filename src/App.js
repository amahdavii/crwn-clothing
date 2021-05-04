import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
