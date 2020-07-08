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
  left: ${props => props.offset}; 
`;

const LogoRight = styled(Logo)`
  right: ${props => props.offset}; 
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
  const [offset, setOffset] = useState('0px'); 

  useEffect (()=> {
    const moveOnScroll = () => {
      let top = containerTop.current.getBoundingClientRect().top;
      // Only move when title is scrolled into view (height > top) and 
      // stops when scrolls past the end of title (top >= -100) 
      // ^ accounts for extra 100px to ensure enough time to center
      if (height > top && top >= -100) {
        if (top < 0){
          setOffset(((width / 2) - 50) + 'px'); 
        } else {
          // Divided by 2 to center and -50px because logo is 100pixels
          setOffset((((1 - (top / height)) * width) / 2) - 50 + 'px');
        }
      }
    }

    // Adjust position because of resize
    let top = containerTop.current.getBoundingClientRect().top;
    // Beyond the end of title, so centered, else will go beyond 
    if (top < 0) {
      setOffset(((width / 2) - 50) + 'px'); 
    } else {
      setOffset((((1 - (top / height)) * width) / 2) - 50 + 'px');
    }

    // Update moveOnScroll with new width and height whenever resized
    window.addEventListener('scroll', moveOnScroll);
    return ()=>{window.removeEventListener('scroll', moveOnScroll)};
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