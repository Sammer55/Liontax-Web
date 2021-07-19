import React from "react";
import styled from "styled-components";

const StyledSubtitle = styled.p`
    color: #c5c5c5;
`

export default function Subtitle({ text }) {

    return(
        <StyledSubtitle>
            { text }
        </StyledSubtitle>
    )
}