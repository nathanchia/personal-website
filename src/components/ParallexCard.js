import React from 'react';
import styled from 'styled-components';

import {text} from '../styles';

// Required props: text

const Container = styled.div`
    height: calc(66.7vh - 20px);
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('/about-colored.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Intro = styled.div`
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 20px;

    background-color: rgba(255,255,255, 0.7);

    font-family: ${text};
    font-size: 1.3em;
    text-align: center;
`;

export default (props) => {
    return (
        <Container id='about' >
            <Intro>{props.text}</Intro>
        </Container>
    );
}