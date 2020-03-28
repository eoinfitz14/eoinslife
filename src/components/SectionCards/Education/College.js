import React from 'react';

// simple component with no state so we don't need to make it a class
const College = () => {
  return (
    <div className='white fw9 avenir'>
      <p className='pa1'>
        <span className='fl underline'>
          BAI Computer Engineering, Trinity College Dublin
        </span>
        <span className='fr underline'>
          September 2015 - July 2019
        </span>
      </p>
      <br></br>
      <div className="pv3 flex">
        <div className="outline h0 w-25 pa3 mr2">
          <code>1st year</code>
        </div>
        <div className="outline h0 w-25 pa3 mr2">
          <code>2nd year</code>
        </div>
        <div className="outline h0 w-25 pa3 mr2">
          <code>3rd year</code>
        </div>
        <div className="outline h0 w-25 pa3 mr2">
          <code>4th year</code>
        </div>
      </div>
      <div className="pv3 flex">
        <div className="w-25 pa1 mr2">
          <code>Second Class Honours, first division (2.1)</code>
        </div>
        <div className="w-25 pa1 mr2">
          <code>Second Class Honours, second division (2.2)</code>
        </div>
        <div className="w-25 pa1 mr2">
          <code>First Class Honours (1.1)</code>
        </div>
        <div className="w-25 pa1 mr2">
          <code>First Class Honours (1.1)</code>
        </div>
      </div>
    </div>
  );
}

export default College; 