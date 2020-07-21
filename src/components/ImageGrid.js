import React from 'react';
import styled from 'styled-components';
import {text, blue} from '../styles';
import { useMediaQuery } from 'react-responsive';

// Required props: title, imgs

const Container = styled.div`
    padding: 10px;
    padding-bottom: 40px;
    margin-left: auto;
    margin-right: auto;    
    max-width: 1100px;
    
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin-bottom: 20px;
    font-family: ${text};
    color: ${blue};
    text-align: center;
    font-size: 1.2em;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.isSmall ? '1fr 1fr' : '1fr 1fr 1fr'};
    grid-template-rows: 1fr;
    grid-row-gap: 70px;
`;

const Image = styled.img`
    height: 80px;
    width: auto; 
    
    margin-left: auto;
    margin-right: auto;
`;

export default (props) => {
    const isSmall = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <Container>
            <Title>{props.title}</Title>
            <Grid isSmall={isSmall} >{props.imgs && props.imgs.map((img, index) => <Image key={index} src={img} alt={'Other'} />)}</Grid>
        </Container>
    );
}