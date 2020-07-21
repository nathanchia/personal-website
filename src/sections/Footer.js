import React from 'react';
import styled from 'styled-components';

import {gray, blue, text} from '../styles';

const Container = styled.div`
    height: 33.3vh;
    min-height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${gray};
    color: white;
    text-align: center;
    font-family: ${text};
    font-size: 1em;
`;

const Title = styled.p`
    margin-top: 0;
    color: ${blue};
    text-align: center;
    font-family: ${text};
    font-size: 1.2em;
`;

export default () => {
    return (
        <Container>
            <Title>Contact Me:</Title>
            nkchia@uw.edu <br />
            linkedin.com/in/nkchia/
        </Container>
    );
}