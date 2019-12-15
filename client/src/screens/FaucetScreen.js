/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Web3 from 'web3'
import FaucetWidget from '../containers/Faucet/FaucetWidget'

const FaucetScreen = () => {
  return (
    <>
      <Helmet>
        <title>Faucet</title>
      </Helmet>
      <Container fluid={true}>
        <Row style={{ marginTop: 40 }}>
          <Col sm={12}>
            <FaucetWidget />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p style={{ marginTop: 20, textAlign: 'center' }}>
              This faucet drips 1.5 Ether every 5 seconds. You can register your
              account in our queue. Max queue size is currently 5. Serving from
              account 0x687422eea2cb73b5d3e242ba5456b782919afc85( balance
              2,109,843 ETH).
            </p>
            <p>
              If you need Rinkeby Ether you can use this faucet:
              https://faucet.rinkeby.io/
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FaucetScreen
