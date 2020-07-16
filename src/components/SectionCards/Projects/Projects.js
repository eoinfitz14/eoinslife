import React from 'react';
import '../SectionCards.css';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects-bg pv5 avenir'>
      <h1 className='f4 br3 br--top black mv0 pt2 pb4 ph3 baskerville'>
        PERSONAL PROJECTS
      </h1>
      <div id='job' className='center br3 pt1 job-container'>
        <div>
          <img className='shadow-3' src={require('./robofriends.jpg')} alt="Robofriends" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              Robofriends
            </p>
          </div>
          <p className='tl lh-copy'>
            Robofriends is a simple Front-End-Only React App that I completed as part of a Udemy course in full-stack development. 
            Front-End development is something I had not been exposed to before doing this course. I found this exercise really
            useful as I am keen to learn about the whole stack. This app displays searchable images from Robohash.org that 
            are created based on the hash-value of an avatar name.
          </p>
          <div>
             <a href='https://github.com/eoinfitz14/robofriends' className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue mr2">Source Code</a>
             <a href='https://eoinfitz14.github.io/robofriends/' className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue ml2">See Live</a>
          </div>
        </div>
        <div>
          <img className='shadow-3' src={require('./facerecognition.jpg')} alt="Face Recognizer" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              Face Recognizer
            </p>
          </div>
          <p className='tl lh-copy'>
            Given an image URL, Face Recognizer uses Clarifai's image-recognition API to detect the coordinates of a
            face (if present) from the image provided. This app allows users to register and sign in, encrypting their credentials
            before adding them to a database. This was the code-along final project of the Udemy course mentioned previously. 
          </p>
          <ul>
            <li>Developed using ReactJS, NodeJS, ExpressJS and PostgreSQL</li>
            <li>Handled API calls with Ajax</li>
            <li>Database for logins using PostgreSQL</li>
            <li>Deployed on Heroku</li>
          </ul>
          <div className='dib pb2'>
             <a href='https://github.com/eoinfitz14/' className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue mr2">Source Code</a>
             <a href='https://facerecogniser.herokuapp.com/' className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue ml2">See Live</a>
          </div>
        </div>
        <div>
          <img className='shadow-3' src={require('./youarehere.jpg')} alt="You Are Here!" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              EoinFitzsimons.com
            </p>
          </div>
          <p className='tl lh-copy'>
            While this site is used as a portfolio for my projects, I also created it to experience the challenges of designing
            and building a website from scratch. I met a few obstacles along the way, including making the website responsive and
            compatible with any device from mobile to monitor. I also took this opportunity to learn how to deploy to AWS S3 buckets.
          </p>
          <div>
             <a href='https://github.com/eoinfitz14/eoinslife' className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 