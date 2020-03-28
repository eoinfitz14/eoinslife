import React from 'react';
import College from './College';
import School from './School';
import './Education.css';
// simple component with no state so we don't need to make it a class
const Education = () => {
  return (
    <div className='module pt6 pb6 avenir'>
      <article className='center blur w-70 pa5 hidden br3 mv4 shadow-3'>
        <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
          EDUCATION
        </h1>
        <College />
        <School />     
      </article>
    </div>
  );
}

export default Education; 