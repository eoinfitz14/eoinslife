import React from 'react';
import College from './College';
import School from './School';
import '../SectionCards.css';

const Education = () => {
  return (
    <div className='educ-bg pv5 avenir'>
        <h1 className='f4 br3 br--top black mv0 pt2 pb4 ph3 baskerville'>
          EDUCATION
        </h1>
        <College />
        <School />     
    </div>
  );
}

export default Education; 