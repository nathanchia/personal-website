import React from 'react';
import styled from 'styled-components';
import SvgLines from 'react-mt-svg-lines';    

import Links from '../components/Links';
import {gray} from '../styles';
import Portrait from '../images/Images/Portrait';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 350px;
    background-color: ${gray};
`;

const PortraitContainer = styled.div`
    flex: 8;
    display: flex;
    align-items: center;
`;

const LinksContainer = styled.div`
    flex: 2;
    width: 100%;
`;

export default () => {
    const linkInfo = [{text: 'ABOUT', id:'about'}, {text: 'EXPERIENCE', id:'experience'}, {text: 'PROJECTS', id:'projects'}, {text: 'SKILLS', id:'skills'}]

    return (
        <Container id='cover' >
            <PortraitContainer>
                <SvgLines animate={ true } duration={ 5000 }>
                    <Portrait />
                </SvgLines>
            </PortraitContainer>

            <LinksContainer>
                <Links linkInfo={linkInfo}/>
            </LinksContainer>
        </Container>
    );
}
