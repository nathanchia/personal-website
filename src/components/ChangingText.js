import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {gray, special} from '../styles';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Container = styled.div`
    height: ${props => (props.height / 3 + 'px')};
    padding: 10px;

    display:flex;
    align-items: center;
    justify-content: center;

    color: ${gray};
    font-family: ${special};
    font-size: 2em;
    text-align: center;
`;

export default () => {
    const { height } = useWindowDimensions();
    // '|' used to mimic a typewritor cursor
    const [text, setText] = useState('|');
    
    // Enter phrases to display here
    const phrases = ['Available for employment', 'Available for freelance', 'Malaysian', 'Fluent in English, Mandarin, and Malay'];

    let length;  
    let timerId;

    // Reduces a letter every 70 ms
    const reduceText = (targetPhrase) => {
        timerId = setInterval(reduceStep, 70, targetPhrase);
    }

    // Reduces a letter
    const reduceStep = (targetPhrase) => {
        if (length > 0) {
            setText(targetPhrase.substring(0, length - 1) + '|');
            length--;
        } else {
            clearInterval(timerId);
            increaseText();
        }
    }

    // Picks a random phrase from phrases and adds a letter every 70ms
    const increaseText = () => {
        let index = Math.floor(Math.random() * phrases.length);
        let targetPhrase = phrases[index];

        length = 0;
        timerId = setInterval(increaseStep, 70, targetPhrase);
    }

    // Adds a letter.
    // If phrase is fully displayed, waits for 3 seconds and then starts reducing
    const increaseStep = (targetPhrase) => {
        if (length < targetPhrase.length) {
            length++;
            setText(targetPhrase.substring(0, length) + '|');
        } else {
            clearInterval(timerId);
            setTimeout(reduceText, 3000, targetPhrase);
        }
    }

    useEffect(()=>{
        // Starts the changing text loop on mount
        setTimeout(increaseText, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container height={height} >
            {text}
        </Container>
    );
}