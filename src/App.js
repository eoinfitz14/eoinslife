import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/SectionCards/About/About';
import './App.css';

class App extends Component { // need class to handle state if needs be
  render(){
    return (
      <div className="App">
        <Navigation />
        <About />
        {/*
        <Links />
  
         */}
      </div>
    );
  }
}

export default App;
