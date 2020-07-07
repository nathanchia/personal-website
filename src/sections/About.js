import React from 'react';

import Title from '../components/Title';
import AboutIcon from '../images/Icons/AboutIcon';
import {gray} from '../styles';
import ChangingText from '../components/ChangingText';

export default () => {
  return (
      <div id='about'>
        <Title 
            main={false}
            icon={<AboutIcon fill={gray}/>}
            title={'About'}
        />
        <ChangingText />
      </div>
  );
}