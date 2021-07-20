import React from "react";
import styled from "styled-components";
import lion from "../../assets/lion.png";
import { Link } from "react-router-dom";

const Header = styled.div`
    background-color: #FFF;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 3px solid #C5C5C5;
    justify-content: center;
`

export default function header() {
    return (
        <Header>
            <Link to="/" style={{ textDecoration: "none" }}>
                <img src={lion} width="90" height="75" alt="lion" />
            </Link>
        </Header>
    )
}