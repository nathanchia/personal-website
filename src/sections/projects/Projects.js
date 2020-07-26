import React from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';
import Showcase from '../../components/showcase/Showcase';
import Description from '../../components/Description';
import ProjectIcon from '../../images/Icons/ProjectIcon';
import CloCardsLogo from './headerImages/clocardslogo.png'

import ClocardsSignin from './clocardsImages/clocards-signin.png';
import ClocardsCreate from './clocardsImages/clocards-create.png';
import ClocardsEdit from './clocardsImages/clocards-edit.png';
import ClocardsPing from './clocardsImages/clocards-ping.png';
import ClocardsFavs from './clocardsImages/clocards-favs.png';
import ClocardsDisplay from './clocardsImages/clocards-display.png';

import ReactNativeLogo from '../toolsImages/react-native-logo.png';
import PythonLogo from '../toolsImages/python-logo.png';
import FlaskLogo from '../toolsImages/flask-logo.png';

// Required Props: isModalVisible <= hide or show arrows of carousels based on modal visibility

export default (props) => {
  const clocardsPics = [ClocardsSignin, ClocardsEdit, ClocardsPing, ClocardsFavs, ClocardsDisplay, ClocardsCreate];
  const clocardsTools = [{image: ReactNativeLogo, name: 'React Native'}, {image: PythonLogo, name: 'Python'}, {image: FlaskLogo, name: 'Flask'}]
  const linkInfo = [{text:'MOBILE APP', id:'app'}]

  const clocardDesc = "Inspired by Pokemon Go, I wanted to utilize the location services of a phone."
    + " As networking is vital for a college student, I decided to make an app that could allow users to easily create a namecard or a resume."
    + " When a note is posted at the user's location, notes posted by other users nearby are also retrieved."  
    + " These notes can be read and bookmarked for future use.";
  
  const clocardFront = "The interface of the app as shown above is scalable for all phone sizes and features navigation features such as tabs, stacks, and a drawer."
    + " These were all created using React Native.";

  const clocardBack = "The backend, on the other hand, was created using Python and Flask. User login credentials as well as created/bookmarked notes are all saved and updated through a MySQL database."
  + " Futhermore, tokens are used to authorize users."
  + " In the event a password is forgotten, the backend is also capable of sending a password-reset-email automatically to the user.";
  
  const clocardPars = [clocardDesc, clocardFront, clocardBack];

  return (
      <div id='projects'>
        <Title 
            right = {true}
            icon={<ProjectIcon />}
            title={'Projects'}
            linkInfo={linkInfo}
        />

        <div id='app'>
          <Header 
            logo={<img src={CloCardsLogo} alt={'Clocards Logo'} style={{height:'120px', width:'120px'}}/>}
            title={'Published Clocards on the Play Store'} 
            description={'Clocards is a mobile app designed to display your written notes in virtual coordinates. Find other users in your proximity and sort them by distance for an easier netwroking process.'}
          />
        </div>


        <Showcase isModalVisible={props.isModalVisible} pics={clocardsPics} maxWidth={280} widthFraction={2} noPadding={true}/>

        <Description pars={clocardPars} tools={clocardsTools}/>
      </div> 
  );
}