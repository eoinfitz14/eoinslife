import React from 'react';
import Scroll from 'react-scroll';
import './Header.css';
import Hamburger from './Hamburger';


const Link = Scroll.Link;

const SideNavigation = () => {
    return (
      <div className='side-nav-visibility'>
        <nav >
          <ul className='side-nav shadow-3'>
            <Hamburger/>
            <Link to='about'      spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>About</Link>
            <Link to='education'  spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Education</Link>
            <Link to='experience' spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Work Experience</Link>
            <Link to='skills'     spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Skills</Link>
            <Link to='awards'     spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Awards</Link>
          </ul>
        </nav>
      </div>
    );
}

export default SideNavigation; 