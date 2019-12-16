/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import FeedsSearchBar from '../../containers/Feeds/FeedsSearchBar'
import { FeedsListSearchWidget } from '../../containers/Feeds/FeedsListWidget'

const TrackSearchScreen = ({
  history,
  match: {
    params: { search },
  },
}) => (
  <>
    <Helmet>
      <title>Track Search Results</title>
    </Helmet>
    <Container fluid={true}>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <FeedsSearchBar history={history} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={12}>
          <FeedsListSearchWidget search={search} />
        </Col>
      </Row>
    </Container>
  </>
)

export default TrackSearchScreen
