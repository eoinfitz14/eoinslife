import React from 'react';
import College from './College';
import School from './School';
import './Education.css';
// simple component with no state so we don't need to make it a class
const Education = () => {
  return (
    <div className='module pa6'>
      <article className='center w-70 pa2 hidden br3 scrim mv4'>
        <header>
          <h1 className='tl f4 br3 br--top white mv0 pv2 ph3 baskerville'>
            EDUCATION
          </h1>
        </header>
        <College />
        <School />     
      </article>
    </div>
  );
}

export default Education; 