import React, {Component} from 'react';
import Scroll from 'react-scroll';
import { Motion, spring, presets } from 'react-motion';
import './Header.css';
import Hamburger from './Hamburger';

const Link = Scroll.Link;

/* Needs refactoring on conditional statements and repeated code*/

class SideNavigation extends Component{

  constructor() {
    super()    
    this.state = {
      toggle: false
    }
  }

  handleClick() {
    this.setState({toggle: !this.state.toggle})
  }

  render(){
    const toggle = this.state;

    const style = {
      overflow: 'visible',
      cursor: 'pointer',
      // disable touch highlighting on devices
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
    }
    if(this.state.toggle){
      return (
        <div className='side-nav-visibility hamburger-and-side-nav'>
          <div>
            <svg className='fl ml3' viewBox="0 0 96 96" height="2em" onClick={this.handleClick.bind(this)} style={style} >
              <Motion 
                style={{
                  x: spring(this.state.toggle ? 1 : 0, presets.wobbly ),
                  y: spring(this.state.toggle ? 0: 1, presets.wobbly ),
                }}
              >
                {({ x, y }) =>
                  <g 
                    id="navicon" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line 
                      transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`} 
                      x1="7" y1="26" x2="89" y2="26" 
                    />
                    <line 
                      transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`} 
                      x1="7" y1="70" x2="89" y2="70" 
                    />
                    <line 
                      transform={`translate(${x * -96})`} 
                      opacity={y} 
                      x1="7" y1="48" x2="89" y2="48"
                    />
                  </g>
                }
              </Motion>
            </svg>
          </div>
          <div>
            <nav >
              <ul className='side-nav shadow-3'>
                <Link to='about'      spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>About</Link>
                <Link to='education'  spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Education</Link>
                <Link to='experience' spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Work Experience</Link>
                <Link to='skills'     spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Skills</Link>
                <Link to='awards'     spy={true} smooth={true} duration={750} activeClass='active' className='link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph4 pointer'>Awards</Link>
              </ul>
            </nav>
          </div>
        </div>
      );
    }
    if(!this.state.toggle){
      return(
        <div className='side-nav-visibility hamburger-and-side-nav'>
          <svg className='fl ml3' viewBox="0 0 96 96" height="2em" onClick={this.handleClick.bind(this)} style={style} >
            <Motion 
              style={{
                x: spring(this.state.toggle ? 1 : 0, presets.wobbly ),
                y: spring(this.state.toggle ? 0: 1, presets.wobbly ),
              }}
            >
              {({ x, y }) =>
                <g 
                  id="navicon" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="14" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line 
                    transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`} 
                    x1="7" y1="26" x2="89" y2="26" 
                  />
                  <line 
                    transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`} 
                    x1="7" y1="70" x2="89" y2="70" 
                  />
                  <line 
                    transform={`translate(${x * -96})`} 
                    opacity={y} 
                    x1="7" y1="48" x2="89" y2="48"
                  />
                </g>
              }
            </Motion>
          </svg>
        </div>
      );
    }
  }
}

export default SideNavigation; 