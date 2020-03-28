import React from 'react';

// simple component with no state so we don't need to make it a class
const About = () => {
  return (
    <div>
      <article className='center w-70 pa2 hidden ba br3 bg-white b--black-80 mv4'>
        <h1 className='f4 bg-near-white br3 br--top black-50 mv0 pv2 ph3 baskerville'>
          ABOUT
        </h1>
        <div className='center pa1 lh-copy measure avenir'>
          <p> 
            I'm Eoin and I'm an Engineer from Dublin, Ireland! I recently graduated from Trinity
            College Dublin after a fantastic four years and have since been working at LexisNexis Risk Solutions.
          </p>
          <p>
            Hopefully after reading this page you'll get a bit of a better picture of who I am and the kind of work I do.
            If you have any questions about what I do or what it's like to work as an engineer or at LexisNexis, please reach out to
            me via the links above!
          </p>
        </div>
      </article>
    </div>
  );
}

export default About; 