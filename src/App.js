import React, { Component } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar'; 


const navOptions = [
  { name: 'home', _id: 0 }, 
  { name: 'projects', _id: 1 }, 
  { name: 'articles', _id: 2 },
  { name: 'notebooks', _id: 3 }
]

export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      navOptions,
      activePage: 0, 
    }

    this.onOptionSelect = this.onOptionSelect.bind(this); 
  }
  
  onOptionSelect(id) {
    this.setState({
      activePage: id 
    }); 
  }

  render() {
    const { activePage } = this.state; 
    return (
      <div className="App">
        <div className='sidebar'>
          <Sidebar 
            navOptions={navOptions}
            onOptionSelect={this.onOptionSelect}
          />  
        </div>
        <div className='router-outlet'>
          { Router(activePage) }
        </div>
      </div>
    );
  }
}

const Router = (opt) => {
  switch (opt) {
    case 0:
      return <Home />; 
    case 1: 
      return <Projects />; 
    case 2: 
      return <Articles />; 
    case 3: 
      return <Notebooks />; 
    default:
      return <Home />; 
  }
}

// temps 

const Home = (props) => 
  <div>Test homepage renders!</div>

const Projects = (props) => 
  <div>Test projects page renders!</div>

const Articles = (props) => 
  <div>Test articles page renders!</div>

const Notebooks = (props) => 
  <div>Test notebooks page renders!</div>

