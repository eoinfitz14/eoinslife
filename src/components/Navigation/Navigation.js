import React from 'react';
import Scroll from 'react-scroll';
import Links from './Links';
import './Navigation.css';

const Link = Scroll.Link;

// simple component with no state so we don't need to make it a class
const Navigation = () => {
  return (
    <header className='backgroundGradient black-80 tc pv4 avenir'>
      <a href='' className='bg-black-80 ba b--black dib pa3 w2 h2 br-100'>
        <svg className='white' data-icon='skull' viewBox='0 0 32 32'><title>skull icon</title><path d='M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12'></path></svg>
      </a>
      <h1 className='mt2 mb0 baskerville i fw1 f1'>Eoin Fitzsimons</h1>
      <h2 className='mt2 mb0 f6 fw4 ttu tracked'>CV and Portfolio</h2>
      <div className='mt4'>
        <Links/>
      </div>
      <nav className='bt bb tc mw8 center'>
        <ul>
          <Link to='about' spy={true} smooth={true} duration={500} activeClass='active' className='f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l pointer'>About</Link>
          <Link to='education' spy={true} smooth={true} duration={500} activeClass='active' className='f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l pointer'>Education</Link>
          <Link to='work-experience' spy={true} smooth={true} duration={500} activeClass='active' className='f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l pointer'>Work Experience</Link>
          <Link to='skills' spy={true} smooth={true} duration={500} activeClass='active' className='f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l pointer'>Skills</Link>
          <Link to='awards-certificates' spy={true} smooth={true} duration={500} activeClass='active' className='f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l pointer'>Awards/Certificates</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation; 