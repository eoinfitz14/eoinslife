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
        <div className='tl underline pv3'>
            Proven Technical Skills:
        </div>
        <div className=' tl list p10 '>
          <ul id='computerList' className='ul4'>
            <li>Java</li>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>C</li>
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
            <li>Agile</li>
            <li>Scrum</li>
            <li>Jira</li>
            <li>Confluence</li>
          </ul>
        </div>
        <div className='tl underline pv3'>
            Proven Soft Skills:
        </div>
        <div className='tl list p10 '>
          <p className='mb4'>
             From the time I started college, I have not stopped adding new things to my technical arsenal. However, there are
             certain soft skills that I have been improving since a young age.
          </p>
          <ul id='checkList' className='ul4'>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Always Learning</li>
            <li>Problem Solving</li>
            <li>Strong Work Ethic</li>
            <li>Organisation</li>
            <li>Actively Listening</li>
            <li>Adapt Quickly To New Environments</li>
          </ul>
        </div>
        <div className='tl underline pv3'>
            Certificates:
        </div>
        <div className='tc p10'>
          <ul id='scrollList'>
            <li>The Complete Web Developer in 2020: Zero to Mastery (Udemy Certificate)</li>
            <li>Tennis Ireland Level 1 Coaching Qualification (9 month course)</li>
            <li>SSI Open Water Diver Licence</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Skills; 