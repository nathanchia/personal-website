import React from 'react';

import Title from '../../components/Title';
import SkillsIcon from '../../images/Icons/SkillsIcon';
import BarGraph from '../../components/BarGraph';
import {blue} from '../../styles';

import JSLogo from './jsLogo.png';

export default () => {
  const skillsData = [{name: '#1 Javascript', logo: JSLogo}, {name: '#2 Java'}];
  return (
      <div id='skills'>
        <Title 
            main = {true}
            icon={<SkillsIcon fill={blue}/>}
            title={'Skills'}
        />

        <BarGraph title={'Programming Languages Ranked by Proficiency'} data={skillsData}/>
      </div>
  );
}