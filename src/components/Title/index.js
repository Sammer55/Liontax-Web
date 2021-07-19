import React from "react";
import styled from "styled-components";

const StyledTitle = styled.span`
    color: #000;
    font-size: 30px;
    font-weight: bold;
`

export default function Title({ text }) {

    return(
        <StyledTitle>
            { text }
        </StyledTitle>
    )
}