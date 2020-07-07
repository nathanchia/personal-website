import React from 'react';

import Title from '../components/Title';
import SkillsIcon from '../images/Icons/SkillsIcon';
import {blue} from '../styles';

export default () => {
  return (
      <div id='skills'>
        <Title 
            main = {true}
            icon={<SkillsIcon fill={blue}/>}
            title={'Skills'}
        />
      </div>
  );
}