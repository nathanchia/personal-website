import React from 'react';

/*
import Title from '../components/Title';
import AboutIcon from '../images/Icons/AboutIcon';
*/
import ParallexCard from '../components/ParallexCard';
import ChangingText from '../components/ChangingText';

export default () => {
  return (
      <div >
        <ParallexCard text={"I'm a senior undergrad at University of Washington majoring in Computer Science and minoring in Entrepreneurship."}/>
        <ChangingText />
      </div>
  );
}