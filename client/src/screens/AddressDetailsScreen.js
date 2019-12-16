/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import { FeedsListByAddressWidget } from '../containers/Feeds/FeedsListWidget'
import { AgreementsListByAddressWidget } from '../containers/Agreements/AgreementsListWidget'

const AddressDetailsScreen = ({
  match: {
    params: { id },
  },
}) => (
  <>
    <Helmet>
      <title>Address {id}</title>
    </Helmet>
    <Container style={{ marginTop: 20 }} fluid={true}>
      <h1>Search results</h1>
      <Row>
        <Col sm={12}>
          <FeedsListByAddressWidget id={id} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={12}>
          <AgreementsListByAddressWidget id={id} />
        </Col>
      </Row>
    </Container>
  </>
)

export default AddressDetailsScreen
