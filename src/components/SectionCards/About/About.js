import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-bg pv5 avenir'>
      <div className='about-width center blur pa5 br3 mv4 shadow-3'>
        <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
          ABOUT ME
        </h1>
        <div className='about-container'>
          <div>
            <div className='tl pa1 lh-copy measure avenir'>
              <p> 
                I'm an engineer working in Susquehanna International Group. I always 
                have goals that I'm working towards in work and in personal life and I strive for quality.
                Working as a Software Engineer in Test allows me to help my team deliver a top quality product in an automated fashion.
              </p>
              <p>
                Over the course of my short career so far, I have learned a myriad of technical skills that I didn't learn in college,
                while getting an insight into what skills I need to learn for a successful career in tech which I spend
                hours of my own time working on.
              </p>
            </div>
          </div>
          <div className='ph3'>
            <p id='profiler'>
              <img src={require('./me.jpg')} alt="Photo of Me!" />
            </p>
          </div>
          <div>
            <div className='tl pa1 lh-copy measure avenir'>
              <p>
                <strong>Name:</strong>
                <br></br>
                Eoin Fitzsimons
                <br></br>
                <strong>Age:</strong>
                <br></br>
                24
                <br></br>
                <strong>Graduated:</strong>
                <br></br>
                November '19
                <br></br>
                <strong>Location</strong>
                <br></br>
                Dublin, Ireland
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 