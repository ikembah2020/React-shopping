import React, { Component } from 'react';
import './App.css';


import HomePage from "./pages/homepage/Homepage.jsx";

class App extends Component {
  render() {
    return <div>
      <div className='headText'>
      <h1>MERRY COMPLEX</h1>
      </div>
      
      <HomePage />
    </div>;
  }
}

export default App;
