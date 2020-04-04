import React from 'react';
import '../SectionCards.css';
import './Awards.css';

// simple component with no state so we don't need to make it a class
const Awards = () => {
  return (
    <div className='awards-bg pv5 avenir'>
      <article className='center blur w-70 pa5 hidden br3 mv4 shadow-3'>
        <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
        AWARDS
        </h1>
        <div className='tl p10'>
          <ul>
            <li className='star'>The Complete Web Developer in 2020: Zero to Mastery (Udemy Certificate)</li>
            <li className='star'>Tennis Ireland Level 1 Coaching Qualification (9 month course)</li>
            <li className='star'>SSI Open Water Diver Licence</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Awards; 