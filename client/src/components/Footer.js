/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from "react";
import {Container, Col, Row} from "react-bootstrap"
import './Footer.css'

const footer = ( props ) => (
        <footer className="footer navbar-fixed-bottom">
            <Container fluid style={{ backgroundColor: '#FFFFFF', height: 180 }}>
                <Container style={{paddingTop: 20}}>
                <Row>
                    <Col sm={6} lg={6}>
                        Erascan
                        2019 © Mikhail Lazarev, All rights reserved
                    </Col>
                    <Col sm={6} lg={3}>
                        <a href="http://t.me/mikael_l" target="_blank" rel="noopener noreferrer">Policy</a><br /><br />
                        <a href="http://t.me/mikael_l" target="_blank" rel="noopener noreferrer">GitHub</a><br /><br />
                         <a href="http://t.me/mikael_l" target="_blank" rel="noopener noreferrer">Contactt</a><br /><br />
                    </Col>
                    <Col sm={6} lg={3}>
                        <a href="http://t.me/mikael_l" target="_blank" rel="noopener noreferrer">Contact</a>
                    </Col>
                </Row>

            </Container>
            </Container>
        </footer>);


export default footer;
