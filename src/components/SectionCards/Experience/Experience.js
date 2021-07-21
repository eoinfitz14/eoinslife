import React from 'react';
import '../SectionCards.css';
import './Experience.css';

const Experience = () => {
  return (
    <div className='experience-bg pv5 avenir'>
      <h1 className='f4 br3 br--top black mv0 pt2 pb4 ph3 baskerville'>
        WHAT I'VE DONE SO FAR
      </h1>
      <div id='job' className='center br3 pt1 job-container'>
        <div>
          <img className='shadow-3' src={require('./sig.jpg')} alt="SIG Logo" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              Susquehanna International Group (SIG)
            </p>
            <p className='mv1 role-colour'>
              Software Engineer - Test Automation
            </p>
            <p className='mv1'>
              October 2020 - Present
            </p>
          </div>
          <p className='tl lh-copy'>
            SIG is a proprietary trading company that was founded with an entrpeneurial mindset and takes a rigorous approach to decision making. My role is to build and maintain automated testing suites to be used for trading apps. Every day I am faced with complex technical challenges in order to reproduce bugs found in the apps or think of innovative ways to increase test coverage.
          </p>
        </div>
        <div>
          <img className='shadow-3' src={require('./lexisnexis.jpg')} alt="LexisNexis Logo" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              LexisNexis Risk Solutions
            </p>
            <p className='mv1 role-colour'>
              Software Engineer in Test
            </p>
            <p className='mv1'>
              September 2019 - October 2020
            </p>
          </div>
          <p className='tl lh-copy'>
            LexisNexis Risk Solutions (LNRS) utilises Big Data to provide bespoke risk analysis tools for a broad range of sectors including Healthcare, Insurance and Governments. My day-to-day involved writing and reviewing automated tests using Java and Cucumber as well as ensuring that anything to do with the product was of the best quality. This ranged from Jira tickets to product features and performance. Our goal was to "blur the lines" between Developers and QAs so that eventually everyone would write feature code and automated tests.
          </p>
          <div className='fw5'>
            <p className='mv1 role-colour'>
              Technology Intern
            </p>
            <p className='mv1'>
              January 2019 - July 2019
            </p>
          </div>
          <p className='tl lh-copy'>
            Starting as an intern, I had never written code in Java, learned about any software testing methodologies or even interned before. My initial role as an intern was to assist with the revival of a suite of automated tests that had not been touched for a whole year but by the time that I left it was the epicentre of our release testing. After impressing in the first half of my internship I got the opportunity to replace a senior test engineer (3 levels above entry level) that was leaving the company on an integration between two major products with one based in Dublin and the other in the UK. Being thrown in the deep end was an invaluable experience and an opportunity that I will always be grateful for.
          </p>
        </div>
        <div>
          <img className='shadow-3' src={require('./rs.jpeg')} alt="RS Logo" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              RS Academy, Leopardstown Tennis Club
            </p>
            <p className='mv1 role-colour'>
            Tennis Professional
            </p>
            <p className='mv1'>
            August 2017 - April 2019
            </p>
          </div>
          <p className='tl lh-copy'>
            RS Academy is one of Ireland's top tennis academies. Academy alumni include college players in the US, national 
            champions and Davis Cup players for Ireland. Here, I did my best to create an environment where the players loved 
            to come to training. I coached juniors who were competing at both national and international level and travelled to tournaments in Spain and Belgium with u10, u12 and u14 players.
          </p>
        </div>
        <div>
          <img className='shadow-3' src={require('./stanleypark.jpg')} alt="Stanley Park" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              Stanley Park Tennis, Vancouver
            </p>
            <p className='mv1 role-colour'>
              Assistant Tennis Professional
            </p>
            <p className='mv1'>
              June - September 2017 & 2018
            </p>
          </div>
          <p className='tl lh-copy'>
            Stanley Park Tennis was a microcosm of Vancouver - diverse, picturesque, fun and friendly. Coaching here was all
            about giving people an opportunity to improve or learn something new in the most enjoyable, inclusive way possible.
            Here, I coached groups from the Vancouver Tennis Association (VTA), a non-profit organization started by tennis players
            in the LGBTQ+ community that fosters and promotes goodwill, fellowship, and healthy competition. I coached anyone
            from 10 years old to over-70s and loved it so much that I came back to work here two Summers in a row.
          </p>
        </div>
        <div>
          <img className='shadow-3' src={require('./jericho.jpeg')} alt="Jericho Tennis Club" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              Jericho Tennis Club, Vancouver
            </p>
            <p className='mv1 role-colour'>
              Assistant Tennis Professional
            </p>
            <p className='mv1'>
              June - September 2017 & 2018
            </p>
          </div>
          <p className='tl lh-copy'>
          Jericho Tennis Club is one of Vancouver's most prestigious sports clubs. Here, I coached a variety of levels including camps for 4 to 6-year-olds, performance-level juniors and recreational adults. I also took part in exhibition matches for members to watch on the first Friday of every month against another tennis professional.
          </p>
        </div>
        <div >
          <img className='shadow-3' src={require('./leinstertennis.jpg')} alt="Leinster Tennis Logo" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              Leinster Tennis
            </p>
            <p className='mv1 role-colour'>
              Tennis Assistant / Access Player
            </p>
            <p className='mv1'>
              February 2017 - May 2017
            </p>
          </div>
          <p className='tl lh-copy'>
            Having trained with Leinster tennis from 12 to 18 years old, I was invited to work with their under 18's squad to set
            the bar for how you should train. This was while I was completing the Tennis Ireland Level 1 Coach course on weekends and so,
            allowed me to gain more experience as a coach.
          </p>
        </div>
        <div>
          <img className='shadow-3' src={require('./gardenhouse1.jpg')} alt="Garden House Plants" />
        </div>
        <div className='tl blur pa3 br3 shadow-3'>
          <div className='fw5'>
            <p className='organization-name company-colour mv1'>
              The Garden House, Malahide
            </p>
            <p className='mv1 role-colour'>
            Customer Service Sales Assistant
            </p>
            <p className='mv1'>
            September 2015 - February 2017
            </p>
          </div>
          <p className='tl lh-copy'>
            The Garden House is a premium garden centre that sells quality plants, garden furniture and barbecues. Working here
            part-time while in college allowed me to hone my skills in team work and customer service as well as managing
            my time efficiently in order to balance college assignments and work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience; 