import React from "react";
import styled from "styled-components";
import lion from "../../assets/lion.png";
import { Link } from 'react-router-dom';

const Header = styled.div`
    background-color: #FFF;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-left: 2rem;
    border-bottom: 3px solid #C5C5C5;
`

const NavTitle = styled.div`
    font-size: 25px;
    color: #000;
`

const NavItem = styled.div`
    font-size: 20px;
    color: #000;
    background-color: #FFF;
    &:hover {
        color: #FF6F00;
    }
    padding: 8px;
`

const NavItemsContainer = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-evenly;
`

export default function header() {

    return (
        <Header>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <NavTitle>
                    <img src={lion} width="90" height="75" alt="logo" />
                </NavTitle>
            </Link>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <NavTitle>Lion Tax</NavTitle>
            </Link>

            <NavItemsContainer>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <NavItem>Lista de clientes</NavItem>
                </Link>

                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <NavItem>Adicionar cliente</NavItem>
                </Link>
            </NavItemsContainer>
        </Header>
    )
}