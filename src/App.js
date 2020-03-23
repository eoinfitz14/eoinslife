import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/SectionCards/About/About';
import './App.css';
import Education from './components/SectionCards/Education/Education';
import WorkExperience from './components/SectionCards/WorkExperience/WorkExperience';
import Skills from './components/SectionCards/Skills/Skills';
import AwardsCertificates from './components/SectionCards/AwardsCertificates/AwardsCertificates';
import { Element } from 'react-scroll';

class App extends Component { // need class to handle state if needs be

  render(){
    return (
      <div className="App">
          <Navigation />
        <Element id='about' >
          <About />
        </Element>
        <Element id='education' >
          <Education />
        </Element>
        <Element id='work-experience' >
          <WorkExperience />
        </Element>
        <Element id='skills' >
          <Skills />
        </Element>
        <Element id='awards-certificates' >
          <AwardsCertificates />
        </Element>
      </div>
    );
  }
}

export default App;
