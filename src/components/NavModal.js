import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

import {blue, text} from '../styles';
import Cross from '../images/Icons/Cross';

const StyledLink = styled(Link)`
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }
    color: ${blue};
    font-size: 1.5em;
    font-family: ${text};
`;

const StyledCross = styled(Cross)`
    position: absolute;
    left: 0;
    top: 0;
    &:hover {
        cursor: pointer;
    }
`;

export default (props) => {
    let Events = Scroll.Events;
    Events.scrollEvent.register('begin', function() {
        props.setIsModalVisible(false);
    });

    const duration = 1000;
    
    useEffect(() => {
        Modal.setAppElement('#root')
    }, []);

    return (
        <Modal
            isOpen={props.isModalVisible}  
            style={{ 
                overlay: {
                    backgroundColor: 'white',
                    minHeight: '350px'
                },
                content: {
                    border: 'none',
                    color: blue,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
        >
            <StyledCross onClick={()=>{props.setIsModalVisible(false);}} fill={blue}/>

            <StyledLink
                to={'about'} 
                smooth={true}
                duration={duration}
            >
                ABOUT
            </StyledLink>

            <StyledLink
                to={'experience'} 
                smooth={true}
                duration={duration}
            >
                EXPERIENCE
            </StyledLink>

            <StyledLink
                to={'projects'} 
                smooth={true}
                duration={duration}
            >
                PROJECTS
            </StyledLink>

            <StyledLink
                to={'skills'} 
                smooth={true}
                duration={duration}
            >
                SKILLS
            </StyledLink>
        </Modal>
    );
}