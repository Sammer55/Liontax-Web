import React from 'react';
import styled from 'styled-components';
import lion from '../../assets/lion.png';

const Header = styled.div`
    background-color: #000;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-left: 2rem;
`

const NavItem = styled.div`
    font-size: 20px;
    color: #FFF;
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