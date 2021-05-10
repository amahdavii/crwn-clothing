import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/Shop/Shop.component';
import SignInAndSignUpPage from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component';
import Header from './Components/Header/Header.component';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
    </div>
  );
}

export default App;
