import React from 'react';

// simple component with no state so we don't need to make it a class
const About = () => {
  return ( //bab- -black-80
    <div className='about-bg pv5 avenir'>
    <article className='center blur w-70 pa5 hidden br3 mv4 shadow-3'>
      <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
          ABOUT
        </h1>
        <div className='center pa1 lh-copy measure avenir'>
          <p> 
            I'm Eoin and I'm an Engineer from Dublin, Ireland! I recently graduated from Trinity
            College Dublin after a fantastic four years and have since been working at LexisNexis Risk Solutions.
          </p>
          <p>
            Hopefully after reading this page you'll get a bit of a better picture of who I am and the kind of work that I do.
            If you have any questions about what I do, what it's like to work as an engineer or at LexisNexis, please reach out to
            me via the links above!
          </p>
        </div>
      </article>
    </div>
  );
}

export default About; 