import React from 'react';
import styled from 'styled-components';

import toModal from './toModal.png';

// Required Props: setIsModalVisible

const Container = styled.div`
    position: fixed;
    top: 15px;
    left: 70px;
    &:hover {
        cursor: pointer;
    }
`;

export default (props) => {
    return (
        <Container onClick={()=>{props.setIsModalVisible(true);}}>
            <img src={toModal} alt={'Open nav'} style={{height:'50px', width:'50px'}}/>
        </Container>
    );
}