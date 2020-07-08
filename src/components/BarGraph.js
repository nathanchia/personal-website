import React, { useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import { NodeGroup } from 'react-move';

import useWindowDimensions from '../hooks/useWindowDimensions';
import {blue, text} from '../styles';

// Required Props: title, data <= in the form [{name: '', logo: src}]

const Container = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    margin-bottom: 20px;
    text-align: center;
    font-family: ${text};
    font-size: 1.2em;
`;

// +115 px to account for 75 pixels shifted to right
// for names, and +40 pixels for logos on end of bars
const Graph = styled.svg`
    width: calc(50% + 115px);
`;

export default (props) => {
    const { height, width } = useWindowDimensions();
    const graphTop = useRef(null);
    const [barData, setBarData] = useState([]);
    const [viewed, setViewed] = useState(false);  // If viewed, adjust widths when window is resized

    // Initialize data from props
    useEffect(() => {
        let data = [];
        for (let i = 0; i < props.data.length; i++) {
            data[i] = {name: props.data[i].name, y: 50 * i, width: 5, logo: props.data[i].logo};
        }
        setBarData(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect (() => {
        const updateData = () => {
            setBarData(data => {
                let newData = [];
                for (let i = 0; i < data.length; i++) {
                    newData[i] = {name: data[i].name, y: data[i].y, width: width / (2 + i), logo: data[i].logo}
                }
                return newData;
            });
        };
        
        const animateOnEnter = () => {
            let top = graphTop.current.getBoundingClientRect().top;
            
            // Only expand when component is visible, +30 px for padding
            if (height > top + 30) {
                updateData();

                setViewed(true);

                // Remove listener to only expand once
                window.removeEventListener('scroll', animateOnEnter)   
            }
        };

        // Only when graph has been expanded, are widths adjusted when window is resized
        if (viewed) {
            updateData();
        }

        window.addEventListener('scroll', animateOnEnter);
        return ()=>{window.removeEventListener('scroll', animateOnEnter)};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    return (
        <Container >
            <Title>
                {props.title}
            </Title>
            <Graph ref={graphTop}>
                <NodeGroup
                    data={barData}
                    keyAccessor={d => d.name}
                    start={(d) => ({ width: [d.width], logoPos: [d.width + 10]})}
                    update={(d) => ( { width: [d.width], logoPos:[d.width + 10], timing: { duration: 700 } })}
                >
                    {nodes => (
                        <g  transform="translate(75,10)">
                            {nodes.map(({ key, data, state }, i) => (
                                <g key={key}>
                                    <text
                                        style={{fontSize:'0.8em', fontFamily:'Titillium Web'}}
                                        x={-75}
                                        y={data.y + 10}
                                        alignmentBaseline="middle"
                                    >
                                        {data.name}
                                    </text>

                                    <rect
                                        y={data.y}
                                        width={state.width}
                                        height={20}
                                        style={{ fill: blue }}
                                    />

                                    <image
                                        href={data.logo}
                                        x = {state.logoPos}
                                        y = {data.y}
                                        width = {20}
                                        height = {20}
                                    >
                                    </image>
                                </g>
                            ))}
                        </g>
                    )}
                </NodeGroup>
            </Graph>
        </Container>
    );
}