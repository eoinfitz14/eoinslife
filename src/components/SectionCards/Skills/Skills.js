import React from 'react';
import '../SectionCards.css';
import './Skills.css';

// simple component with no state so we don't need to make it a class
const Skills = () => {
  return (
    <div className='skills-bg pv5 avenir'>
    <article className='center blur w-70 pa5 hidden br3 mv4 shadow-3'>
      <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
        SKILLS
        </h1>
        <div className='center tl list p10 '>
          <ul className='ul4'>
            <li>Java</li>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>C++</li>
            <li>OpenGL</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Mac</li>
            <li>Windows</li>
            <li>Linux</li>
            <li>JMeter</li>
            <li>Cucumber BDD</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Skills; 