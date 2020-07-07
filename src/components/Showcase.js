import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive'

import './carousel.css'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { blue, text } from '../styles';

// Required props: title, pics
// Optional props: background <= in the form "url('/flow-background.png');" 

const Container = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;

    background-image: ${props => (props.background)}
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.h2`
    margin-top: 0px;
    text-align: center;
    color: ${blue};
    font-family: ${text}
    font-size: 1.5em;
`;

export default (props) => {   
    const {height} = useWindowDimensions();
    const small = useMediaQuery({ query: '(max-width: 850px)' });

    return (
        <Container background={props.background}>
            <Title>
                {props.title}
            </Title>

            {
                (() => {
                    if (small)
                        return <Carousel showThumbs={false} showArrows={true}>
                                    {props.pics.map((pic, index)=> <img src={pic} key={index} style={{height:(height/3.5), width: 'auto'}} alt={'Portfolio'}/>)}
                                </Carousel>;
                    else  
                        return <Carousel showThumbs={false} showArrows={true}>
                                   {props.pics.map((pic, index)=> <img src={pic} key={index} style={{height:(height/2), width: 'auto'}} alt={'Portfolio'}/>)}
                                </Carousel> 
                })()
            }
     
        </Container>
    );
}