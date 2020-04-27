import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import Scroll from 'react-scroll';
import Links from './Links';
import './Header.css';
import SideNavigation from './SideNavigation';
import MainNavigation from './MainNavigation';


const Link = Scroll.Link;

// simple component with no state so we don't need to make it a class
const Header = () => {

    return (
      <header className='header-bg black-80 pv4 avenir'>
        <SideNavigation/>
        <div>
          <h1 className='mt2 mb0 baskerville fw1 f1'>Eoin Fitzsimons</h1>
          <h2 className='mt2 mb0 f6 fw4 ttu tracked'>Blog / Portfolio / CV</h2>
          <div className='mt4'>
            <Links/>
          </div>
        </div>
        <MainNavigation />
      </header>
    );
}

export default Header; 