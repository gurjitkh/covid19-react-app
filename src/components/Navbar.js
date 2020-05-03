import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import {ButtonContainer} from "../Button"
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-xs navbar-dark px-sm-5">
                
                 
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:#2f67ba;
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform:capitalize;
    
}
`