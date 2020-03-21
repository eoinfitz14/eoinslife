import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component { // need class to handle state if needs be
  render(){
    return (
      <div className="App">
        <Navigation />
        {/*
        
        <SectionCards />
        <Links />
  
         */}
      </div>
    );
  }
}

export default App;
