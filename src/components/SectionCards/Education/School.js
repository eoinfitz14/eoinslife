import React from 'react';

const School = () => {
  return (
    <div>
      <div id='college' className='center br3 pt1 college-container'>
        <div className='pt1 br3'>
          <img className='shadow-3 br3' src={require('./cus.jpg')} alt="CUS" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
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
            As with most people, my time in school holds some of my best memories. CUS enabled me to get an understanding of what
            it means to work successfully in a team. During my time here I represented the school as a prefect, acted as tennis
            captain, played 1st team rugby at junior level and even had the opportunity to be involved in a mini-company. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default School; 