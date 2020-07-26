import React from 'react';

import ParallexCard from '../../components/ParallexCard';
import ChangingText from '../../components/ChangingText';
import AboutBackground from './about-background.jpg';

export default () => {
  return (
      <div >
        <ParallexCard background={AboutBackground} text={"I'm a senior undergrad at University of Washington majoring in Computer Science and minoring in Entrepreneurship."}/>
        <ChangingText />
      </div>
  );
}