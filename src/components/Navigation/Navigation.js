import React from 'react';
import Scroll from 'react-scroll';
import Links from './Links';
import './Navigation.css';

const Link = Scroll.Link;

// simple component with no state so we don't need to make it a class
const Navigation = () => {
  return (
    <header className='nav-bg black-80 pv4 avenir'>
      <a href='' className='bg-black-80  b--black dib pa3 w2 h2 br-100'>
        <svg className='white' data-icon='skull' viewBox='0 0 32 32'><title>skull icon</title><path d='M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12'></path></svg>
      </a>
      <h1 className='mt2 mb0 baskerville fw1 f1'>Eoin Fitzsimons</h1>
      <h2 className='mt2 mb0 f6 fw4 ttu tracked'>CV and Portfolio</h2>
      <div className='mt4'>
        <Links/>
      </div>
      <nav className='bt bb mw7 center'>
        <ul className='center'>
          <Link to='about' spy={true} smooth={true} duration={750} activeClass='active'      className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>About</Link>
          <Link to='education' spy={true} smooth={true} duration={750} activeClass='active'  className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Education</Link>
          <Link to='experience' spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Work Experience</Link>
          <Link to='skills' spy={true} smooth={true} duration={750} activeClass='active'     className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Skills</Link>
          <Link to='awards' spy={true} smooth={true} duration={750} activeClass='active'     className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Awards</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation; 