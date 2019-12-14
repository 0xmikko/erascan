/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './Footer.css'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default () => (
  <footer className="footer navbar-fixed-bottom">
    <Container fluid style={{ backgroundColor: '#FFFFFF', height: 110 }}>
      <Container style={{ paddingTop: 20 }}>
        <Row>
          <Col sm={6} lg={6}>
            <Image
              src={logo}
              alt={'logo'}
              height={40}
              style={{ marginBottom: 10 }}
            />
            <br />
            Erascan 2019 © Mikhail Lazarev, All rights reserved
          </Col>
          <Col sm={6} lg={3}>
            <div style={{ marginTop: 0 }}>
              <a
                href="http://t.me/mikael_l"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy
              </a>
              <br />
              <a
                href="http://t.me/mikael_l"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <br />
              <a href="https://erasure.xxx" target="_blank">
                Erasure protocol
              </a>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <a href="https://erasure.xxx" target="_blank">
              Contact
            </a>
            <br />
            <div style={{ marginTop: 20 }}>
              <a href="https://github.com/MikaelLazarev/erascan">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  size={'lg'}
                  color={'black'}
                />
              </a>
              {'    '}
              <a href="https://github.com/MikaelLazarev/erascan">
                <FontAwesomeIcon icon={['fab', 'telegram']} size={'lg'} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </footer>
)
