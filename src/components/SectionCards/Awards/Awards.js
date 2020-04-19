import React from 'react';
import '../SectionCards.css';
import './Awards.css';

// simple component with no state so we don't need to make it a class
const Awards = () => {
  return (
    <div className='awards-bg pv5 avenir'>
      <article className='center blur w-70 pa5 hidden br3 mv4 shadow-3'>
        <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
        AWARDS & ACHIEVEMENTS
        </h1>
        <div className='tl'>
          <ul className='fw6'>
            <li className='star'>LexisNexis Recognise Our People Award</li>
            <li className='star'>First Class Honours in Computer Engineering</li>
            <li className='star'>Book token awarded for First Class Honours in 3rd year exams</li>
            <li className='star'>Outstanding Contribution to Tennis (secondary school graduation)</li>
            <li className='star'>School Prefect</li>
            <li className='star'>Ronnie Delany Sports Scholarship</li>
            <ul className='mb3 fw4 no-bullet'>
              <li>
                Scholarship presented by olympic gold medalist, Ronnie Delany on behalf of CUS the Past Pupils Union.
                Funding went towards coaching fees and travel expenses for international tennis tournaments.
              </li>
            </ul>
            <li className='star'>World Ranked Junior Tennis Player</li>
            <li className='star'>Transition Year Mini Company National Finalist</li>
            <ul className='mb3 fw4 no-bullet'>
              <li>
                I acted as honorary secretary for our mini company - Gym Journals. We sold progress-tracking journals that allowed
                the user to log their work at a time when online fitness was rapidly growing in popularity. Similar products can be seen
                in the market today.
              </li>
            </ul>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Awards; 