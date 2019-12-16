/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import TrackSearchBarWidget from '../containers/Feeds/FeedsSearchBarWidget'
import FeedSearchWidget from '../containers/Feeds/FeedsListSearchWidget'
import { Helmet } from 'react-helmet'

const TrackSearchScreen = ({history, match: { params: {search}}}) => (
  <>
    <Helmet>
      <title>Track Search Results</title>
    </Helmet>
    <Container fluid={true}>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <TrackSearchBarWidget history={history}/>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={12}>
          <FeedSearchWidget search={search}/>
        </Col>
      </Row>
    </Container>
  </>
)

export default TrackSearchScreen
