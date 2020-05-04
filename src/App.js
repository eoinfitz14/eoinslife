import React, {Component} from 'react';
import Header from './components/Header/Header';
import About from './components/SectionCards/About/About';
import './App.css';
import Education from './components/SectionCards/Education/Education';
import Experience from './components/SectionCards/Experience/Experience';
import Skills from './components/SectionCards/Skills/Skills';
import Awards from './components/SectionCards/Awards/Awards';
import Projects from './components/SectionCards/Projects/Projects';

import { Element } from 'react-scroll';

class App extends Component { 

  render(){
    return (
      <div className="App">
        <Header />
        <Element id='about' >
          <About />
        </Element>
        <Element id='experience' >
          <Experience />
        </Element>
        <Element id='projects' >
          <Projects />
        </Element>
        <Element id='education' >
          <Education />
        </Element>
        <Element id='skills' >
          <Skills />
        </Element>
        <Element id='awards' >
          <Awards />
        </Element>
      </div>
    );
  }
}

export default App;
