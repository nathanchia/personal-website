import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import {gray, blue, text} from '../../styles';
import ClassIcon from './extraIcons/classIcon.png';
import LanguageIcon from './extraIcons/languageIcon.png';
import ApoLogo from './extraIcons/apoLogo.png';

const ContainerColumn = styled.div`
    padding: 10px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: ${text};
    color: ${gray};
    font-size: 1em;
    text-align: ${props => props.center? 'center' : 'left'};
`;

const ContainerRow = styled(ContainerColumn)`
    flex-direction: row;
    justify-content: space-evenly;
    
    height: 26vh;
    min-height: 100px;
`;

const Image = styled.img`
    height: 100px;
    width: auto;
`;

const Title = styled.p`
    padding-top: 30px;
    margin-bottom: 30px;
    font-family: ${text};
    color: ${blue};
    font-size: 1.2em;
    text-align: center;
`;

const SubTitle = styled(Title)`
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
`;

export default () => {
    const isSmall = useMediaQuery({ query: '(max-width: 800px)' });
    let classContent;
    let languageContent;
    let apoContent;

    // Everything is displayed vertically
    if (isSmall) {
        classContent = 
        <ContainerColumn >
            <Image src={ClassIcon} alt={'Relevant Classes'} />
            <SubTitle>Relevant Classes</SubTitle>
            CSE154 Web Programming
            <br/>
            CSE311 Foundations of Programming I
            <br/>
            CSE312 Foundations of Programming II
            <br/>
            CSE351 Hardware Software Interface
            <br/>
            CSE332 Data Structures and Parallelism
            <br/>
            CSE333 Systems Programming
            <br/>
            CSE473 Introduction to Artificial Interface
            <br/>
            CSE341 Programming Languages
            <br/>
            CSE421 Intro to Algorithms
            <br/>
            CSE484 Computer Security
        </ContainerColumn>;

        languageContent = 
        <ContainerColumn center={true}>
            <Image src={LanguageIcon} alt={'Language'} />
            <SubTitle>Fluent Languages</SubTitle>
            English, Mandarin, Malay

            <SubTitle>Basic Languages</SubTitle>
            Japanese
        </ContainerColumn>;

        apoContent = 
        <ContainerColumn >
            <Image src={ApoLogo} alt={'Alpha Phi Omega'} />
            <div style={{maxWidth: '275px'}}>
                <SubTitle>Vice President of Alpha Phi Omega</SubTitle>
                APO is a fraternity focused on service and giving back to the community. 
                As Vice President of the Gamma Alpha Chapter, I am responsible for 
            </div>
        </ContainerColumn>
    } else {  // Split Image and text into two columns
        classContent = 
        <ContainerRow >
            <Image src={ClassIcon} alt={'Relevant Classes'} />
            <div>
                <SubTitle>Relevant Classes</SubTitle>
                
                <Grid>
                    <div>CSE154 Web Programming</div>
                    <div>CSE311 Foundations of Programming I</div>
                    <div>CSE312 Foundations of Programming II</div>
                    <div>CSE351 Hardware Software Interface</div>
                    <div>CSE332 Data Structures and Parallelism</div>
                    <div>CSE333 Systems Programming</div>
                    <div>CSE473 Introduction to Artificial Interface</div>
                    <div>CSE341 Programming Languages</div>
                    <div>CSE421 Intro to Algorithms</div>
                    <div>CSE484 Computer Security</div>
                </Grid>
            </div>
        </ContainerRow>;

        languageContent = 
        <ContainerRow center={true}>
            <Grid>
                <div>
                    <SubTitle>Fluent Languages</SubTitle>
                    English, Mandarin, Malay
                </div>
                <div>
                    <SubTitle>Basic Languages</SubTitle>
                    Japanese
                </div>
            </Grid> 
            <Image src={LanguageIcon} alt={'Language'} />
        </ContainerRow>;

        apoContent = 
        <ContainerRow >
            <Image src={ApoLogo} alt={'Alpha Phi Omega'} />
            <div style={{maxWidth: '575px'}}>
                <SubTitle>Vice President of Alpha Phi Omega</SubTitle>
                APO is a fraternity focused on service and giving back to the community. 
                As Vice President of the Gamma Alpha Chapter, I am responsible for
            </div>
        </ContainerRow>
    }

    return (
        <div>
            <Title id='extra'>Extra Skills</Title>
            
            {classContent}

            {languageContent}

            {apoContent}
        </div> 
    );
}