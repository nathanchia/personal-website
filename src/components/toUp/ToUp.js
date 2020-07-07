import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import ToUpIcon from './toUp.png';

const LinkStyled = styled(Link)`
    position: fixed;
    top: 15px;
    left: 15px;
    &:hover {
        cursor: pointer;
    }
`;

export default () => {
    const duration = 1000;
    return (
        <LinkStyled     
            to='cover'
            smooth={true}
            duration={duration}
        >
            <img src={ToUpIcon} alt={'Nav Up'} style={{height:'50px', width:'50px'}}/>
        </LinkStyled>
    );
}