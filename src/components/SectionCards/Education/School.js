import React from 'react';

// simple component with no state so we don't need to make it a class
const School = () => {
  return (
    <div className='white avenir'>
      <p className='pt1'>
        <span className='fl underline'>
          Catholic University School, Dublin
        </span>
        <span className='fr underline'>
          September 2015 - July 2019
        </span>
        <br></br>
        <span className='pt2 fl no-underline'>
            Leaving Certificate - 525 points
        </span>
      </p>
    </div>
  );
}

export default School; 