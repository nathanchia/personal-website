import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './carousel.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { blue, text } from '../../styles';

// Required props: title, pics, widthFraction, maxWidth
// Optional props: background <= in the form "url('/flow-background.png');" 
//                 noPadding <= boolean, usually because no title prop

const Container = styled.div`
    padding-top: ${props => props.noPadding ? '0px' : '60px'};

    background-image: ${props => (props.background)}
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.h2`
    margin-top: 0px;
    margin-bottom: 30px;
    text-align: center;
    color: ${blue};
    font-family: ${text}
    font-size: 1.2em;
`;

export default (props) => {   
    const {width} = useWindowDimensions();

    return (
        <Container background={props.background} noPadding={props.noPadding}>
            <Title>
                {props.title}
            </Title>

            <Carousel infiniteLoop={true} showThumbs={false} showArrows={true}>
                {props.pics.map((pic, index)=> <img src={pic} key={index} style={{height:'auto',  width: (width / props.widthFraction), maxWidth: (props.maxWidth)}} alt={'Portfolio'}/>)}
            </Carousel> 
    </Container>
    );
}