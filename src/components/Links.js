import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import {blue, text} from '../styles';

// Required props: linkInfo <= in the form [{text: 'ABOUT', id:'about'}]

const Container = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly;
    align-items: top;
`;

const StyledLink = styled(Link)`
    &:hover {
        cursor: pointer;
    }
    color: ${blue};
    font-size: 1em;
    font-family: ${text};
`;

export default (props) => {
    const duration = 1000;

    return (
        <Container>
            {props.linkInfo && 
                props.linkInfo.map((info, index) => 
                    <StyledLink 
                        key={index} 
                        to={info.id} 
                        smooth={true}
                        duration={duration}
                    >
                        {info.text}
                    </StyledLink>
                )
            }
        </Container>
    );
}