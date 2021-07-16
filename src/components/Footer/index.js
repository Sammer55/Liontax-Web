import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #439;
`

const FooterItem = styled.div`
    font-size: 18px;
    color: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export default function footer() {

    return(
        <Footer>
            <FooterItem> Lion Tax </FooterItem>
        </Footer>
    )
}