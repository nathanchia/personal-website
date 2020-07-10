import React from 'react';

import Title from '../../components/Title';
import SkillsIcon from '../../images/Icons/SkillsIcon';
import BarGraph from '../../components/BarGraph';
import {blue} from '../../styles';

import JSLogo from './bargraphLogos/jsLogo.png';
import JavaLogo from './bargraphLogos/javaLogo.png';
import PythonLogo from './bargraphLogos/pythonLogo.png'

export default () => {
  const skillsData = [{name: '#1 Javascript', logo: JSLogo}, {name: '#2 Java', logo: JavaLogo}, {name:'#3 Python', logo: PythonLogo}];
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