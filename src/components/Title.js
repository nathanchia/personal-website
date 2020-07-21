import React, {useRef, useEffect, useState} from 'react';

import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import {gray, blue, title} from '../styles';
import Links from '../components/Links';

// Required Props: icon (Component), title (string), linkInfo
// right (boolean) <= if true, logo slide in from right, left otherwise

// overflow: hidden since Logo may be outside screen when scrolling
const Container = styled.div`
  height: 100vh;
  min-height: 350px;
  overflow: hidden;
  background-color: ${gray};
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
`;

// Width of 100 as svg of all logos set to 100px as well,
// and to ensure center allignment as Title text may overflow this container
const LogoLeft = styled.div.attrs(props => ({
  style: {
    left: props.offset,
  },
}))`
  width: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoRight = styled.div.attrs(props => ({
  style: {
    right: props.offset,
  },
}))`
  width: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  margin-top: 20px;
  color: ${blue};
  font-family: ${title}
  font-size: 2em;
`;

const LinksContainer = styled.div`
  position: absolute;
  bottom: 20%;
  width: 100%;
`;

export default (props) => {
  const { height, width } = useWindowDimensions();
  const containerTop = useRef(null);
  const [offset, setOffset] = useState(0); 

  useEffect (()=> {
    const updatePos = () => {
      let top = containerTop.current.getBoundingClientRect().top;
      // Only update when title is within screen height (x2 for reload)
      if (height * 2 > top && top >= -height) {
        // Beyond the end of title, so centered, else will go beyond 
        if (top < 0) {
          setOffset(((width / 2) - 50)); 
        } else {
          // Divided by 2 to center and -50px because logo is 100pixels
           setOffset((((1 - (top / height)) * width) / 2) - 50);
        }
      }
    }

    // Executed when window is resized (height/width changed);
    updatePos();

    // Update the updatePos func with new width and height whenever resized
    window.addEventListener('scroll', updatePos);
    // For when user reloads
    window.addEventListener('load', updatePos);
    return ()=>{window.removeEventListener('scroll', updatePos)};
  }, [height, width]);

  let logo;
  if (props.right) {
    logo =
      <LogoRight offset={offset}>
        {props.icon}
        <Title >{props.title}</Title>
      </LogoRight>;
  } else {
    logo =   
      <LogoLeft offset={offset}>
        {props.icon}
        <Title >{props.title}</Title>
      </LogoLeft>;
  }

  return (
    <Container ref={containerTop} height={height} >
      {logo}
      <LinksContainer>
        <Links linkInfo={props.linkInfo}/>
      </LinksContainer>
    </Container>
  );
}