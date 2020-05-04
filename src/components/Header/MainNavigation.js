import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './Header.css';

const Link = Scroll.Link;

// simple component with no state so we don't need to make it a class
const MainNavigation = () => {
    return (
      <nav className='bt bb mw7 center main-nav-visibility'>
        <ul className='main-nav'>
          <Link to='about'      spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>About</Link>
          <Link to='experience' spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Experience</Link>
          <Link to='projects' spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Projects</Link>
          <Link to='education'  spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Education</Link>
          <Link to='skills'     spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Skills</Link>
          <Link to='awards'     spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Awards</Link>
        </ul>
      </nav>
    );
}

export default MainNavigation; 