import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.component';
import './App.css';


const HatsPage = (props) => {
  console.log(props)
  return (
    <h1>Hats Page</h1>
  )
} 

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
