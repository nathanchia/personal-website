import React, {useRef, useEffect, useState} from 'react';

import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import {gray, blue, title} from '../styles';

// Required Props: icon (Component), title (string), 
// main (boolean) <= if true, gray back + logos slide in from right, blue + left otherwise.

// overflow: hidden since Logo may be outside screen when scrolling
const Container = styled.div`
  height: ${props => (props.height + 'px')};
  overflow: hidden;
  background-color: ${props => props.main ? gray : blue};
  position: relative;
  display:flex;
  align-items: center;
`;

// Width of 100 as svg of all logos set to 100px as well,
// and to ensure center allignment as Title text may overflow this container
const Logo = styled.div`
  width: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoLeft = styled(Logo)`
  left: ${props => props.offset + 'px'}; 
`;

const LogoRight = styled(Logo)`
  right: ${props => props.offset + 'px'}; 
`;

const Title = styled.h1`
  margin-top: 20px;
  color: ${props => props.main ? blue : gray};
  font-family: ${title}
  font-size: 2em;
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
  if (props.main) {
    logo =
      <LogoRight offset={offset}>
        {props.icon}
        <Title main={props.main}>{props.title}</Title>
      </LogoRight>;
  } else {
    logo =   
      <LogoLeft offset={offset}>
        {props.icon}
        <Title main={props.main}>{props.title}</Title>
      </LogoLeft>;
  }

  return (
    <Container ref={containerTop} height={height} main={props.main}>
      {logo}
    </Container>
  );
}