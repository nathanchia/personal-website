import React from 'react';

import {blue} from '../../styles';
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

import htmlLogo from '../toolsImages/html-logo.png';
import cssLogo from '../toolsImages/css-logo.png';
import JSLogo from '../toolsImages/js-logo.png';
import reactNativeLogo from '../toolsImages/react-native-logo.png';
import electronLogo from '../toolsImages/electron-logo.png';
import javaLogo from '../toolsImages/java-logo.png';

export default () => {
  const flowPics = [flowDesktop, flowMobile, flowPopup, flowPopupMenu, flowActivate, flowWelcome];
  const bettrPics = [bettrTasks, bettrTasksDark, bettrCreateTask, bettrCreateTaskDark, bettrHome, bettrProfiles, bettrProxies, bettrSettings, bettrCreateProfile, bettrCreateProfileDark];
  const flowTools = [{image: htmlLogo, name:'HTML'}, {image: cssLogo, name:'CS'}, {image: JSLogo, name:'JavaScript'}]
  const bettrTools = [{image: reactNativeLogo, name:'ReactJS'}, {image: electronLogo, name: 'ElectronJS'}];
  const ezTools = [{image: javaLogo, name: 'Java'}];

  return (
      <div id='experience' >
        <Title 
            main = {true}
            icon={<WorkIcon fill={blue}/>}
            title={'Experience'}
        />

        <Header 
          logo={<img src={CodeKitchenLogo} alt={'CodeKitchen Logo'} style={{height:'120px', width:'120px'}}/>}
          title={'Freelancer for CodeKitchen'} 
          description={'CodeKitchen  is a code, design, branding, and consulting agency that specializes in high end frontend development but also provides design, backend, and full stack application development.'}
        />
        <Showcase pics={bettrPics} maxWidth={850} widthFraction={1.1} title={'Bettrbot'} background={"url('/bettr-background.png');"}/>
        <Description tools={bettrTools} text={"BettrBot is a desktop application specializing in checkout automation of limited releases for Supreme. The application supports light and dark theme modes."}/>
        <Showcase pics={flowPics} maxWidth={450} widthFraction={1.2} title={'Flow'} background={"url('/flow-background.png');"}/>
        <Description tools={flowTools} text={"Flow is an extension tool for automating checkout of items from platforms such as Shopify, Supreme, and YeezySupply. Users are able to customize the extension's functionality through an external webpage."}/>

        <hr style={{marginTop:'70px', marginBottom:'50px', width: '70%'}}/>

        <Header 
          logo={<img src={EZIotLogo} alt={'EZIot Logo'} style={{height:'120px', width:'120px'}}/>}
          title={'Intern at EZIot'} 
          description={'EZIot is a startup located in Malaysia that provides solutions and services to help integrate IoT features such as hardware manufactoring, cloud services, and end-user mobile apps into products.'}
        />
        <Description tools={ezTools} text={"My internship at EZIot focused on the backend."}/>
      </div>
  );
}