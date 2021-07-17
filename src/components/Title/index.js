import React from 'react';
import styled from 'styled-components';

const Title = styled.text`
    color: #000;
    font-size: 1.3rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
`

export default function title({ text }) {

    return(
        <Title>
            { text }
        </Title>
    )
}