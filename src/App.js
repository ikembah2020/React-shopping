import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';

import './App.css';

import SignInUp from './pages/sign-in-up/sign-in-up.jsx';

import HomePage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";

class App extends Component {
  render() {
    return <div>
      <Header />
      <div className='headText'>
      <h1>MERRY COMPLEX</h1>
      </div>

    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
      
    </div>;
  }
}

export default App;
