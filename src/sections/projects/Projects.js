import React from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';
import Showcase from '../../components/Showcase';
import ProjectIcon from '../../images/Icons/ProjectIcon';
import CloCardsLogo from './clocardslogo.png'
import {gray} from '../../styles';

import ClocardsEdit from './clocardsImages/clocards-edit.png';
import ClocardsPing from './clocardsImages/clocards-ping.png';
import ClocardsFavs from './clocardsImages/clocards-favs.png';
import ClocardsDisplay from './clocardsImages/clocards-display.png';

export default () => {
  const clocardsPics = [ClocardsEdit, ClocardsPing, ClocardsFavs, ClocardsDisplay];

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

        <Showcase pics={clocardsPics} />
      </div>
  );
}