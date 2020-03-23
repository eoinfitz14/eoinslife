import React from 'react';
import College from './College';
import School from './School';
// simple component with no state so we don't need to make it a class
const Education = () => {
  return (
    <div >
      <article className='center w-70 pa2 hidden br3 b--black-80 mv4'>
        <h1 className='tl f4 bg-near-white br3 br--top black-50 mv0 pv2 ph3 baskerville'>
          EDUCATION
        </h1>
        <College />
        <School />     
      </article>
    </div>
  );
}

export default Education; 