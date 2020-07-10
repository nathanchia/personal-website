import React from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';
import Showcase from '../../components/showcase/Showcase';
import Description from '../../components/Description';
import ProjectIcon from '../../images/Icons/ProjectIcon';
import CloCardsLogo from './headerImages/clocardslogo.png'
import {gray} from '../../styles';

import ClocardsEdit from './clocardsImages/clocards-edit.png';
import ClocardsPing from './clocardsImages/clocards-ping.png';
import ClocardsFavs from './clocardsImages/clocards-favs.png';
import ClocardsDisplay from './clocardsImages/clocards-display.png';

import ReactNativeLogo from '../toolsImages/react-native-logo.png';
import PythonLogo from '../toolsImages/python-logo.png';
import FlaskLogo from '../toolsImages/flask-logo.png';

export default () => {
  const clocardsPics = [ClocardsEdit, ClocardsPing, ClocardsFavs, ClocardsDisplay];
  const clocardsTools = [{image: ReactNativeLogo, name: 'React Native'}, {image: PythonLogo, name: 'Python'}, {image: FlaskLogo, name: 'Flask'}]

  return (
      <div id='projects'>
        <Title 
            main = {false}
            icon={<ProjectIcon fill={gray}/>}
            title={'Projects'}
        />

        <Header 
          logo={<img src={CloCardsLogo} alt={'Clocards Logo'} style={{height:'120px', width:'120px'}}/>}
          title={'Published Clocards to the Play Store'} 
          description={'Clocards is a mobile app designed to display your namecard and resume in virtual coordinates. Find other users in your proximity and sort them by distance for an easier netwroking process.'}
        />

        <Showcase pics={clocardsPics} maxWidth={280} widthFraction={2} noPadding={true}/>

        <Description tools={clocardsTools}/>
      </div>
  );
}