import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='sidebar'>
          Sidebar goes here 
        </div>
        <div className='router-outlet'>
          Other shit goes here 
        </div>
      </div>
    );
  }
}

