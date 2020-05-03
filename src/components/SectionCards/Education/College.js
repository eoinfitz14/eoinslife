import React from 'react';
import './Education.css';
import '../SectionCards.css';

const College = () => {
  return (
    <div>
      <div id='college' className='center br3 pt1 college-container'>
        <div className='pt1 br3'>
          <img className='shadow-3 br3' src={require('./trinity.jpg')} alt="Trinity" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
          <p className='organization-name company-colour mv1'>
              BAI Computer Engineering
            </p>
            <p className='mv1 role-colour'>
              Trinity College Dublin
            </p>
            <p className='mv1'>
              September 2015 - July 2019
            </p>
          </div>
          <p className='tl lh-copy'>
            I began studying Engineering at TCD with the intention of specializing in Biomedical Engineering. I have always loved
            learning about the human body having completed work experience in Dublin Dental University Hospital as well as 
            the Mini Med programme hosted by the Rotunda Hospital. However, modules involving introduction to Object-Oriented
            Programming, programming buggies to perform operations around a track and data-visualisation in matlab helped develop
            my passion for writing code.
          </p>
        </div>
      </div>

      <div className='pb3 grade-container w-70 center pt3'>
        <div>
          <div className='outline h0 pa3 grow'>
            <code>1st year (General Eng.)</code>
          </div>
          <div className='pa1'>
            <code>Second Class Honours, first division (2.1)</code>
          </div>
        </div>
        <div>
          <div className='outline h0 pa3 grow'>
            <code>2nd year (General Eng.)</code>
          </div>
          <div className='pa1'>
            <code>Second Class Honours, second division (2.2)</code>
          </div>
        </div>
        <div>
          <div className='outline h0 pa3 grow'>
              <code>3rd year (Specialized)</code>
            </div>
            <div className='pa1'>
              <code>First Class Honours (1.1)</code>
            </div>
        </div>
        <div>
          <div className='outline h0 pa3 grow'>
            <code>4th year (Specialized)</code>
          </div>
          <div className='pa1'>
            <code>First Class Honours (1.1)</code>
          </div>
        </div>
      </div>
      <div className='center w-70'>
        <div className='tl underline pt3'>
              Relevant modules included:
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
    </div>
  );
}

export default College; 