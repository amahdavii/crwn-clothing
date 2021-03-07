import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage.component';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import SignInAndSignUpPage from './Pages/SignIn-and-SignupPage/SignIn-and-Signup.component';
import Header from './Components/Header/Header.component';
import { auth } from './firebase/firebase.utils';  

import './App.css';


class App extends Component {
  state = { 
    currentUser: null,
  }


  unsubscirbeFromAuth = null;
 
  componentDidMount() {
    this.unsubscirbeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscirbeFromAuth();
  }

  render() { 
    return ( 
      <div> 
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
     );
  }
}
 
export default App;