import React from 'react';

// simple component with no state so we don't need to make it a class
const School = () => {
  return (
    <div className='avenir'>
      <p className='pa1'>
        <span className='fl underline'>
          Catholic University School, Dublin
        </span>
        <span className='fr underline'>
          September 2015 - July 2019
        </span>
      </p>
      <br></br>
      <p className='fl pa1'>
        Leaving Certificate - 525 points
      </p>
      <br></br>
    </div>
  );
}

export default School; 