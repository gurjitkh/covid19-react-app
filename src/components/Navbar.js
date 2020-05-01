import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import {ButtonContainer} from "../Button"
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-xs navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                 </Link>
                 <ul className="navbar-nav align-items-center">
                     <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                     </li>
                 </ul>
                 <Link to='/cart' className="ml-auto">
                     <ButtonContainer>
                         Search
                     </ButtonContainer>
                 </Link>
                 
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