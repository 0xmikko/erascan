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

const AppBar = props => {
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
              {/*<AppSearch className="mr-sm-2" />*/}
            </Nav>
            <Nav variant={'right'}>
              <Nav.Item bsPrefix={'nav-link'}>
                <Link to={'/track/'}>Track-record</Link>
              </Nav.Item>
              <Nav.Item bsPrefix={'nav-link'}>
                <Link to={'/recourse/'}>Recourse</Link>
              </Nav.Item>
              <Nav.Item bsPrefix={'nav-link'}>
                <Link to={'/faucet/'}>Faucet</Link>
              </Nav.Item>
              <Nav.Item bsPrefix={'nav-link'}>
                <Link to={'/stat/'}>Statistics</Link>
              </Nav.Item>
              <Form inline />
              <NavDropdown title="Mainnet" id="basic-nav-dropdown" alignRight>
                <NavDropdown.Item onClick={props.onLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default AppBar
