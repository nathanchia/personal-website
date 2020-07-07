import React from 'react';
import styled from 'styled-components';

import {blue, gray, text} from '../styles';

// Required props: Logo, title, description

const Container = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;

  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px; 

  color: ${blue};
  text-align:center; 
  font-family: ${text}
  font-size: 1.5em;
`;

const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  width: min(450px, 85%);

  color: ${gray};
  text-align: center;
  font-family: ${text}
  font-size: 1em;
`;

export default (props) => {
  return (
    <Container >
        {props.logo}
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
    </Container>
  );
}