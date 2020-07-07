import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components'

import {gray, blue, text } from '../styles';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Container = styled.div`
  height: ${props => (props.height + 'px')};
  background-color: ${gray};
`;

// height change when portrait
const Links = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly;
    align-items: center;
`;

const LinkStyled = styled(Link)`
    color: ${blue};
    &:hover {
        cursor: pointer;
    }
    font-size: 1em;
    font-family: ${text};
`;

export default () => {
    const { height } = useWindowDimensions();
    const duration = 1000;
    return (
        <Container id='cover' height={height} >
            <Links>
                <LinkStyled
                    to='about'
                    smooth={true}
                    duration={duration}
                >
                    ABOUT
                </LinkStyled>

                <LinkStyled
                    to='experience'
                    smooth={true}
                    duration={duration}
                >
                    EXPERIENCE
                </LinkStyled>

                <LinkStyled
                    to='projects'
                    smooth={true}
                    duration={duration}
                >
                    PROJECTS
                </LinkStyled>

                <LinkStyled
                    to='skills'
                    smooth={true}
                    duration={duration}
                >
                    SKILLS
                </LinkStyled>
            </Links>
        </Container>
    );
}
