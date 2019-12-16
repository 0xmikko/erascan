/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import {
  Nav,
  NavDropdown,
  Form,
  Navbar,
  Image,
  Container,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './AppBar.css'
import logo from '../../logo.png'
import NavItemLink from "./NavItemLink";

const AppBar = ({ onLogout }) => {
  return (
    <Container fluid style={{ backgroundColor: '#FFFFFF' }}>
      <Container>
        <Navbar style={{ textColor: '#000000' }}>
          <Navbar.Brand href="/">
            <Image src={logo} alt={'logo'} height={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ marginLeft: 20 }} />
            </Nav>
            <Nav variant={'right'}>
              <NavItemLink to={'/feeds/'} label={'Track-record'} />
              <NavItemLink to={'/agreements/'} label={'Recourse'} />
              <NavItemLink to={'/faucet/'} label={'Faucet'} />
              <NavItemLink to={'/stat/'} label={'Statistics'} />

              <Form inline />
              <NavDropdown title="Rinkeby" id="basic-nav-dropdown" alignRight>
                <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default AppBar
