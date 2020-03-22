import React from 'react';

// simple component with no state so we don't need to make it a class
const WorkExperience = () => {
  return (
    <div >
      <article className='center w-70 pa2 hidden br3 b--black-80 mv4'>
        <h1 className='tl f4 bg-near-white br3 br--top black-50 mv0 pv2 ph3 baskerville'>
        WORK EXPERIENCE
        </h1>
        <div className='center pa1 lh-copy measure avenir'>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </article>
    </div>
  );
}

export default WorkExperience; 