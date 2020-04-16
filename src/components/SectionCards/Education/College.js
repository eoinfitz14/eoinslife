import React from 'react';
import './Education.css';
import '../SectionCards.css';

// simple component with no state so we don't need to make it a class
const College = () => {
  return (
    <div>
      <div className='tl lh-copy pv3'>
        <div className='organization-name'>
          BAI Computer Engineering, Trinity College Dublin
        </div>
        September 2015 - July 2019
      </div>
      <div className='pb3 grade-container'>
        <div>
          <div className='outline h0 pa3 mr2 grow'>
            <code>1st year (General Eng.)</code>
          </div>
          <div className='pa1 mr2'>
            <code>Second Class Honours, first division (2.1)</code>
          </div>
        </div>
        <div>
          <div className='outline h0 pa3 mr2 grow'>
            <code>2nd year (General Eng.)</code>
          </div>
          <div className='pa1 mr2'>
            <code>Second Class Honours, second division (2.2)</code>
          </div>
        </div>
        <div>
          <div className='outline h0 pa3 mr2 grow'>
              <code>3rd year (Specialized)</code>
            </div>
            <div className='pa1 mr2'>
              <code>First Class Honours (1.1)</code>
            </div>
        </div>
        <div>
          <div className='outline h0 pa3 mr2 grow'>
            <code>4th year (Specialized)</code>
          </div>
          <div className='pa1 mr2'>
            <code>First Class Honours (1.1)</code>
          </div>
        </div>
      </div>
      <div className='tl underline pt3'>
            Modules included:
      </div>
        <div className='flex'>
          <ul id='bookList' className='tl fl no-margin'>
            <li>Data Structures & Algorithms (C/C++)</li>
            <li>Computer Architecture (ARM Assembly & VHDL)</li>
            <li>Computer Networks (C++)</li>
            <li>Computer Graphics (OpenGL & C++)</li>
            <li>Deep Learning & Its Applications (Tensorflow, Python)</li>
            <li>Operating Systems & Concurrent Systems</li>
            <li>Microprocessor Systems (ARM Assembly)</li>
            <li>Information Management (MySQL)</li>
            <li>Probability & Statistics</li>
            <li>Management for Engineers</li>
            <li>Innovation & Entrepreneurship for Engineers</li>
            <li>Internship Project - Reflective Journal, Poster Presentation, On-Site Presentation, 60-page Tech Report (see Work Experience)</li>
            </ul>
        </div>
    </div>
  );
}

export default College; 