import React from 'react';

import Title from '../../components/Title';
import SkillsIcon from '../../images/Icons/SkillsIcon';
import BarGraph from '../../components/BarGraph';
import ImageGrid from '../../components/ImageGrid';
import ExtraSkills from './ExtraSkills';

import JSLogo from './bargraphLogos/jsLogo.png';
import JavaLogo from './bargraphLogos/javaLogo.png';
import PythonLogo from './bargraphLogos/pythonLogo.png';
import CPlusPlusLogo from './bargraphLogos/c++Logo.png';
import HtmlLogo from './bargraphLogos/htmlLogo.png';

import CLogo from './otherLogos/cLogo.png';
import CSharpLogo from './otherLogos/cSharpLogo.png';
import PhpLogo from './otherLogos/phpLogo.png';
import SqlLogo from './otherLogos/sqlLogo.png';
import RacketLogo from './otherLogos/racketLogo.png';
import RubyLogo from './otherLogos/rubyLogo.png';

export default () => {
  const skillsData = [{name: '#1 Javascript', logo: JSLogo}, {name:'#2 HTML, CSS', logo: HtmlLogo}, {name: '#3 Java', logo: JavaLogo}, {name:'#4 Python', logo: PythonLogo}, {name: '#5 C++', logo: CPlusPlusLogo}];
  const otherImgs = [CLogo, CSharpLogo, PhpLogo, SqlLogo, RacketLogo, RubyLogo];
  const linkInfo = [{text:'BY-PROFICIENCY', id:'ranked'}, {text:'EXTRA', id:'extra'}]
  return (
      <div id='skills'>
        <Title 
            right = {false}
            icon={<SkillsIcon />}
            title={'Skills'}
            linkInfo={linkInfo}
        />
      
        <div id='ranked'>
          <BarGraph title={'Ranked by Proficiency'} data={skillsData}/>
        </div>
       
        <ImageGrid title={'Other languages'} imgs={otherImgs}/>

        <hr style={{marginTop:'30px', width: '70%'}}/>

        <ExtraSkills />
      </div>
  );
}