import React from 'react';
import './About.css';
// simple component with no state so we don't need to make it a class
const About = () => {
  return ( //bab- -black-80
    <div className='about-bg pv5 avenir'>
      <div className='container center blur w-70 pa5 br3 mv4 shadow-3'>
        <div>
          <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
            DESCRIPTION
          </h1>
          <div className='tl pa1 lh-copy measure avenir'>
            <p> 
              I'm a recent graduate from Trinity College Dublin and have since been working at LexisNexis Risk Solutions. I always 
              have goals that I'm working towards in work and in personal life and I always strive for quality.
              Working as a Software Engineer in Test allows me to help my team deliver a top quality product in an automated fashion.
            </p>
            <p>
              Since starting my first job as an engineer I have learned a myriad of technical skills that I didn't learn in college
              while getting an insight into what skills I need to learn for a successful career in tech which I spend
              hours of my own time working on.
            </p>
          </div>
        </div>
        <div className='ph3'>
          <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
            PRODUCT
          </h1>
          <p>
            <img src={require('./eoin.jpg')} alt="Photo of Me!" />
          </p>
        </div>
        <div>
          <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
            SPECS
          </h1>
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
  );
}

export default About; 