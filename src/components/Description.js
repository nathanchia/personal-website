import React from 'react';
import styled from 'styled-components';

import { blue, gray, text } from '../styles';

// Required props: pars <= paragraphs in the form of [par1, par2,...], toolImgs <= an array of tool image urls

const Container = styled.div`
  width: min(450px, 85%);
  margin-top: 30px; 
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  
  color: ${gray};
  font-family: ${text};
  font-size: 0.8em;
  text-align: center; 
`;

const ToolsTitle = styled.p`
  margin-top: 20px;

  color: ${blue};
  font-size: 1.2em;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ToolsIcon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
`;

const Tools = (props) => {
  return (
    <ToolsIcon>
      <img src={props.image} alt={'Tools used'} style={{height: '70px', width: '70px'}}/>
      {props.name}
    </ToolsIcon>
  )
}


export default (props) => {
  return (
    <Container >
      {props.pars && props.pars.map((par, index) => <div key={index}>{par}<br/><br/></div>)}

      <ToolsTitle>Tools Used</ToolsTitle>
      <ToolsContainer>
        {props.tools && props.tools.map((tools, index) => <Tools key={index} image={tools.image} name={tools.name}/>)}
      </ToolsContainer>
    </Container>
  );
}