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
import FaucetWidget from '../../containers/Faucet/FaucetWidget'

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
              This faucet gives 10 NMR to every address once in 24 hours. Please donate Rinkeby Ether to this address:
            </p>
            <p style={{ marginTop: 20, textAlign: 'center' }}>
              If you need Rinkeby Ether you can use this faucet:{' '}
              <a href={'https://faucet.rinkeby.io/'} target={'_blank'}>https://faucet.rinkeby.io/</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FaucetScreen
