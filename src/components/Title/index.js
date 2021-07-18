import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`

export default function Title({ text }) {

    return(
        <StyledTitle>
            { text }
        </StyledTitle>
    )
}