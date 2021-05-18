import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/Shop/Shop.component';
import SignInAndSignUpPage from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component';
import Header from './Components/Header/Header.component';
import { auth } from './firebase/firebase.utils';

import './App.css';


class App extends Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() { 
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
 
export default App;
