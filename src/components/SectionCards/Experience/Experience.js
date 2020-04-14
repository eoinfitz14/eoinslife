import React from 'react';
import '../SectionCards.css';
import './Experience.css';
// simple component with no state so we don't need to make it a class
const Experience = () => {
  return (
    <div className='experience-bg pv5 avenir'>
      <article className='center blur-coffee w-70 pa5 hidden br3 mv4 shadow-3'>
        <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
          WORK EXPERIENCE
        </h1>
        <div className='pt1'>
          <p className='fw6'>
            <span className='tl fl underline'>
              Quality Test Engineer - LexisNexis Risk Solutions
            </span>
            <span className='fr underline'>
              September 2019 - Present
            </span>
          </p>
          <br></br>
          <p className='tl lh-copy fw6'>
            LexisNexis Risk Solutions (LNRS) utilises Big Data to provide risk analysis tools for a broad range of sectors including
            Healthcare, Insurance and Governments. I work as a test engineer in the Insurance branch on the Product Delivery team in
            Dublin. The best part of my job is the people I work with. Even when a sprint is not going to plan and workload
            increases, morale is always high and in turn, stress is mitigated. As a test engineer I love writing and reviewing code
            for automated tests in order to "blur the lines" between developers and traditional QAs or manual testers. Soon, we hope 
            for the roles of software engineer and test engineer to become one where everyone writes feature code as well as test
            code. My responsibilities include the following - some of which are not standard for my level:
          </p>
          <ul id='experienceList' className='tl'>
            <li>Writing automated tests using Java and Cucumber BDD</li>
            <li>Ensuring quality through testing as well as Jira tickets</li>
            <li>Training in interns</li>
            <li>Designing online technical assessments for future candidates</li>
            <li>Reviewing CVs and carrying out interviews</li>
            <li>Driver for the testing of Dublin's 25+ clients for its main product - Mapview</li>
            <li>Writing automation code and have written an entire automation suite for one project from scratch</li>
            <li>
              Privacy Champion with LexisNexis Privacy Department! 👮 I represent the Test Engineers in Dublin as a Privacy
              detective, raising awareness of GDPR compliance and security threats at home or in work
            </li>
            <li>Assist other teams in getting started when automating tests with Cucumber for the first time</li>
            <li>Reliability - answering emergency calls out of hours</li>
          </ul>
        </div>
        <div className='pt1'>
          <p className='fw6'>
            <span className='tl fl underline'>
              Technology Intern - LexisNexis Risk Solutions
            </span>
            <span className='fr underline'>
              January 2019 - July 2019
            </span>
          </p>
          <br></br>
          <p className='tl lh-copy fw6'>
            Starting as an intern, I had never written code in Java nor had I learned about any software testing methodologies or
            even interned before but I was excited for the challenge ahead. My initial role as an intern was to assist with the 
            revival of a suite of automated tests that had not been touched for a year due to lack of resources to spend time on it. 
            After impressing in the first half of my internship, an opportunity came along. A senior test engineer (3 levels above 
            my current role) was leaving and I was asked to take her place on a small team working on an integration between two of 
            the UK and Ireland's major products with one based in Dublin and the other in the UK. Being thrown in the deep end was an
            invaluable experience and an opportunity that I will always be grateful for. During this time I learned and achieved
            the following:
          </p>
          <ul id='experienceList' className='tl'>
            <li>Worked on a large-scale project that is used by many of the world's leading insurance companies</li>
            <li>Worked on a project from the 1st day of implementation, finishing it off as a full-time employee</li>
            <li>Wrote entire automation suite for the above project</li>
            <li>Agile methodologies and Behavior-Driven Development</li>
            <li>Working with Developers and Business Analysts to define user stories in Behavior Driven Development syntax</li>
          </ul>
        </div>
        <div className='pt1'>
          <p className='fw6'>
            <span className='tl fl underline'>
              Tennis Professional - RS Academy, Leopardstown Tennis Club
            </span>
            <span className='fr underline'>
              August 2017 - April 2019
            </span>
          </p>
          <br></br>
          <p className='tl lh-copy fw6'>
              RS Academy is one of Ireland's top tennis academies. Players that are part of the academy have been national champions in
              both junior and senior categories, received scholarships to the US to play college tennis and even represented their
              country in the Davis Cup. Having trained in this academy until I was 19, I had an immense passion for helping the players
              get to where they wanted to be and tried to create an environment where the players loved to come to training. 
              My responsibilities included:
          </p>
          <ul id='experienceList' className='tl'>
            <li>Helping youth players reach their goals at national and international level</li>
            <li>Organising trips and travelling with juniors aged 11-14 to international tournaments</li>
            <li>Planning and executing 14 hours of lessons per week while completing a full-time engineering degree</li>
            <li>Attending coaching conferences where we learned the latest coaching methods for all levels</li>
            <li>Running beginner-level adult coaching groups</li>
            <li>Representing the club as a First Team player and rotated as team captain</li>
          </ul>
        </div>
        <div className='pt1'>
          <p className='fw6'>
            <span className='tl fl underline'>
              Assistant Tennis Professional - Jericho Tennis Club, Vancouver
            </span>
            <span className='fr underline'>
              June - September 2017 & 2018
            </span>
          </p>
          <br></br>
          <p className='tl lh-copy fw6'>
            Jericho Tennis Club is one of Vancouver's most prestigious sports clubs. I worked here for two Summers in a row while in
            college and loved every hour I worked there. Here, I was tasked with:
          </p>
          <ul id='experienceList' className='tl'>
            <li>Running tennis camps for 4 to 6-year-olds and assisting with 8 to 12-year-olds</li>
            <li>Always thinking of new and creative games or drills to keep the kids engaged for the entire day</li>
            <li>Providing private lessons to adults of all levels</li>
            <li>Playing exhibition matches against club professionals at events for members</li>
          </ul>
        </div>
        <div className='pt1'>
          <p className='fw6'>
            <span className='tl fl underline'>
              Assistant Tennis Professional - Stanley Park Tennis, Vancouver
            </span>
            <span className='fr underline'>
              June - September 2017 & 2018
            </span>
          </p>
          <br></br>
          <p className='tl lh-copy fw6'>
            Stanley Park holds a special place in my heart. I was lucky enough to coach in one of the most beautful settings in the world.
            Stanley Park Tennis was a microcosm of Vancouver - diverse, picturesque, fun and friendly. Coaching here was all about giving
            people an opportunity to improve or learn something new in the most enjoyable, inclusive way possible.
          </p>
          <ul id='experienceList' className='tl'>
            <li>
            Coaching groups from the Vancouver Tennis Association (VTA), a non-profit organization that fosters and promotes goodwill,
            fellowship, and healthy competition among tennis players in the gay, lesbian, bisexual, transgender, queer (LGBTQ+) community
            </li>
            <li>Coaching teens and adults of all levels from 12 to 70+ years old</li>
            <li>Running social events where people come to play 1-2 hours of matches and meet new people</li>
            <li>Working in the pro shop selling tennis equipment, refreshments and booking lessons</li>
          </ul>
        </div>
        <div className='pt1'>
          <p className='fw6'>
            <span className='tl fl underline'>
              Tennis Assistant / Access Player - Leinster Tennis
            </span>
            <span className='fr underline'>
              February 2017 - May 2017
            </span>
          </p>
          <br></br>
          <p className='tl lh-copy fw6'>
            Having trained with Leinster tennis from 12 to 18 years old, I was asked to join in with their under 18's squad to set
            the bar for how you should train. This was while I was doing a the Tennis Ireland Level 1 Coach course on weekends and so,
            allowed me to gain more experience as a coach.
          </p>
        </div>
        <div className='pt1'>
          <p className='fw6'>
            <span className='tl fl underline'>
              Customer Service Sales Assistant - The Garden House, Malahide
            </span>
            <span className='fr underline'>
              June 2015 - February 2017
            </span>
          </p>
          <br></br>
          <p className='tl lh-copy fw6'>
            The Garden House is a premium garden centre that sells quality plants, garden furniture and barbecues
          </p>
          <ul id='experienceList' className='tl'>
            <li>
              Working in the front of house and dealing with customers, utilising customer service
              skills and carrying out administration tasks
            </li>
            <li>Managing the EPOS at the Cash desk and dealing with purchases</li>
            <li>Marketing and Merchandising stock to all areas within the centre</li>
            <li>Answer telephone calls and dealing with customer queries for items</li>
            <li>All of the above while timing making sure all of the stock was watered and animals (pigs & hens) were fed</li>
            <li>Delivering and assembling garden furniture, barbecues and water features</li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Experience; 