import React from 'react';
import styled from 'styled-components';
import lion from '../../assets/lion.png';

const Header = styled.div`
    background-color: #FFF;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-left: 2rem;
    border-bottom: 1.2px solid #C5C5C5;
`

const NavItem = styled.div`
    font-size: 25px;
    color: #000;
`

export default function header() {

    return(
        <Header>
            <NavItem> 
                <img src={lion} width='90' height='75' alt='logo'/>
            </NavItem>
            <NavItem> Lion Tax </NavItem>
        </Header>
    )
}