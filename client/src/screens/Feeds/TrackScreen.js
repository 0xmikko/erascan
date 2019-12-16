/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import FeedsSearchBarWidget from '../../containers/Feeds/FeedsSearchBar'
import { FeedsListLatestWidget } from '../../containers/Feeds/FeedsListWidget'
import { Helmet } from 'react-helmet'

const TrackScreen = ({history}) => (
  <>
    <Helmet>
      <title>Track & record</title>
    </Helmet>
    <Container fluid={true}>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <FeedsSearchBarWidget history={history}/>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={12}>
          <FeedsListLatestWidget />
        </Col>
      </Row>
    </Container>
  </>
)

export default TrackScreen
