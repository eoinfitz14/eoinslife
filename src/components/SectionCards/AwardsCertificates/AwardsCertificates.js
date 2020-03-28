import React from 'react';
import '../SectionCards.css';

// simple component with no state so we don't need to make it a class
const AwardsCertificates = () => {
  return (
    <div className='awards-bg pv5 avenir'>
      <article className='center blur w-70 pa5 hidden br3 mv4 shadow-3'>
        <h1 className='f4 br3 br--top black mv0 pv2 ph3 baskerville'>
        AWARDS/CERTIFICATES
        </h1>
        <div className='center pa1 lh-copy measure avenir'>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </article>
    </div>
  );
}

export default AwardsCertificates; 