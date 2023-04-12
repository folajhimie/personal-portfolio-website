import React from 'react'
import styled from 'styled-components'
import { BlueTheme } from '../components/Themes'




const Logo = styled.h1`
display: flex;
width: 100%;
justify-content: center;
background-color: transparent;
color: ${props => props.color === 'dark' ? BlueTheme.text : BlueTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 0rem;
font-size: 1.4rem;
top: 5rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          FOLAJHIMIE
        </Logo>
    )
}

export default LogoComponent
