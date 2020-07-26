import React from 'react';

import Title from '../../components/Title';
import WorkIcon from '../../images/Icons/WorkIcon';
import Header from '../../components/Header';
import CodeKitchenLogo from './headerImages/codekitchenlogo.png';
import EZIotLogo from './headerImages/eziotlogo.png';
import Showcase from '../../components/showcase/Showcase';
import Description from '../../components/Description';

import flowDesktop from './flowImages/flow-desktop.png';
import flowMobile from './flowImages/flow-mobile.png';
import flowPopup from './flowImages/flow-popup.png';
import flowPopupMenu from './flowImages/flow-popup-menu.png';
import flowActivate from './flowImages/flow-activate.png';
import flowWelcome from './flowImages/flow-welcome.png';
import flowBackground from './flowImages/flow-background.png';

import bettrTasks from './bettrbotImages/bettr-tasks.png';
import bettrTasksDark from './bettrbotImages/bettr-tasks-dark.png';
import bettrCreateTask from './bettrbotImages/bettr-create-tasks.png';
import bettrCreateTaskDark from './bettrbotImages/bettr-create-tasks-dark.png';
import bettrHome from './bettrbotImages/bettr-home.png';
import bettrProfiles from './bettrbotImages/bettr-profiles.png';
import bettrProxies from './bettrbotImages/bettr-proxies.png';
import bettrSettings from './bettrbotImages/bettr-settings.png';
import bettrCreateProfile from './bettrbotImages/bettr-create-profile.png';
import bettrCreateProfileDark from './bettrbotImages/bettr-create-profile-dark.png';
import bettrBackground from './bettrbotImages/bettr-background.png';

import htmlLogo from '../toolsImages/html-logo.png';
import cssLogo from '../toolsImages/css-logo.png';
import JSLogo from '../toolsImages/js-logo.png';
import reactNativeLogo from '../toolsImages/react-native-logo.png';
import electronLogo from '../toolsImages/electron-logo.png';
import javaLogo from '../toolsImages/java-logo.png';

// Required Props: isModalVisible <= hide or show arrows of carousels based on modal visibility

export default (props) => {
  const flowPics = [flowDesktop, flowMobile, flowPopup, flowPopupMenu, flowActivate, flowWelcome];
  const bettrPics = [bettrTasks, bettrTasksDark, bettrCreateTask, bettrCreateTaskDark, bettrHome, bettrProfiles, bettrProxies, bettrSettings, bettrCreateProfile, bettrCreateProfileDark];
  const flowTools = [{image: htmlLogo, name:'HTML'}, {image: cssLogo, name:'CS'}, {image: JSLogo, name:'JavaScript'}]
  const bettrTools = [{image: reactNativeLogo, name:'ReactJS'}, {image: electronLogo, name: 'ElectronJS'}];
  const ezTools = [{image: javaLogo, name: 'Java'}, {image: JSLogo, name:'JavaScript'}];
  const linkInfo = [{text:'FREELANCE', id:'freelance'}, {text:'INTERNSHIP', id:'internship'}]

  const bettrDesc = "BettrBot is a standalone desktop application specializing in the checkout automation of limited releases for Supreme."
    + " The application supports light and dark theme modes and features a navigation sidebar.";
  const bettrProgram = "I created the frontend using React and utilized Electron to turn the web-app into a full-fledged, downloadable desktop app."
    + " The application is resizable and all UI scale appropriately. " 
    + " The biggest challenge for this project was to adapt to the client's rapidly changing requests."
    + " For example, the dark theme was requested much later during development."
    + " Nevertheless, it was a valuable experience and emphasized the importance of clean, efficient code.";

  const flowDesc =  "Flow is an extension tool for automating checkout of items from platforms such as Shopify, Supreme, and YeezySupply."
    + " Users are able to customize the extension's functionality through an external webpage.";
  const flowProgram = "Vanilla HTML, CSS, and Javascript was used to develop the frontend as per the client's request."
    + " The webpage changes layout based on screen size and settings can be enabled/disabled in bulk or individually.";

  const ezDesc = "When I started my internship, EZIot had just finished prototyping their Smart Lightbulb and Smart Switch."
    + " As an intern, I was responsible for developing the backend used to communicate" 
    + " between the smart devices to Google Home and Amazon Alexa. The devices had to respond to"
    + " voice commands in order to turn on/off, change brightness and hue, etc."
    + " I also needed to create a simple dashboard that displayed relevant information of the devices"
    + " such as power consumption and current hue/brightness.";
  const ezProgram = "I was first taught how to use NodeRed: an interface used to drag and connect"
    + " chunks of Javascript code as a visualization aid for the flow of data."
    + " Although I was skeptical at first due to the unorthodox workflow, it sped up prototyping greatly."
    + " The biggest challenge came after when I had to port my working prototype into pure Java."
  const ezBusiness = "During the final weeks of my internship, I began taking an interest in how the CEO managed the startup."
    + " He took notice of this, and taught me the basics of managing a company."
    + " Additionally, I was sent to attend multiple info sessions and talks about IOTs, the Industry 4.0,"
    + " and Warehouse Automation hosted by the government and other companies."
    + " The experiences I had here built a solid foundation for programming and also"
    + " led to me minoring in Entrepreneurship.";

  const ezPars = [ezDesc, ezProgram, ezBusiness];
  const bettrPars = [bettrDesc, bettrProgram];
  const flowPars = [flowDesc, flowProgram];

  return (
      <div id='experience' >
        <Title 
            right = {false}
            icon={<WorkIcon />}
            title={'Experience'}
            linkInfo={linkInfo}
        />

        <div id='freelance'>
          <Header 
            logo={<img src={CodeKitchenLogo} alt={'CodeKitchen Logo'} style={{height:'120px', width:'120px'}}/>}
            title={'Freelancer for CodeKitchen'} 
            description={'CodeKitchen  is a code, design, branding, and consulting agency that specializes in high end frontend development but also provides design, backend, and full stack application development.'}
          />
        </div>
        <Showcase isModalVisible={props.isModalVisible} pics={bettrPics} maxWidth={850} widthFraction={1.1} title={'Bettrbot'} background={bettrBackground}/>
        <Description pars={bettrPars} tools={bettrTools} />
        <Showcase isModalVisible={props.isModalVisible} pics={flowPics} maxWidth={450} widthFraction={1.2} title={'Flow'} background={flowBackground}/>
        <Description pars={flowPars} tools={flowTools}/>

        <hr style={{marginTop:'70px', width: '70%'}}/>

        <div id='internship'>
          <Header 
            logo={<img src={EZIotLogo} alt={'EZIot Logo'} style={{height:'120px', width:'120px'}}/>}
            title={'Intern at EZIot'} 
            description={'EZIot is a startup located in Malaysia that provides solutions and services to help integrate IoT features such as hardware manufactoring, cloud services, and end-user mobile apps into products.'}
          />
        </div>
        <Description pars={ezPars} tools={ezTools}/>
      </div>
  );
}