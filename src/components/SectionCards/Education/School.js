import React from 'react';

// simple component with no state so we don't need to make it a class
const School = () => {
  return (
    <div >
      <div id='college' className='br3 pv3 college-container'>
        <div>
          <img className='shadow-3' src={require('./cus.jpg')} alt="CUS" />
        </div>
        <div className='fr tl'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              Leaving Certificate
            </p>
            <p className='mv1 role-colour'>
              Catholic University School
            </p>
            <p className='mv1'>
              September 2009 - June 2015
            </p>
          </div>
          <p className='tl lh-copy'>
            Words something say lots of words. Words something say lots of words. Words something say lots of words. 
            Words something say lots of words. Words something say lots of words. Words something say lots of words. 
            Words something say lots of words. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default School; 