import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/SectionCards/About/About';
import './App.css';
import Education from './components/SectionCards/Education/Education';
import WorkExperience from './components/SectionCards/WorkExperience/WorkExperience';
import Skills from './components/SectionCards/Skills/Skills';
import AwardsCertificates from './components/SectionCards/AwardsCertificates/AwardsCertificates';

class App extends Component { // need class to handle state if needs be
  render(){
    return (
      <div className="App">
        <Navigation />
        <About />
        <Education />
        <WorkExperience />
        <Skills />
        <AwardsCertificates />
      </div>
    );
  }
}

export default App;
