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
import AgreementsListSearch from '../containers/Agreements/AgreementsListSearch'

const RecourseSearchScreen = ({
  history,
  match: {
    params: { search },
  },
}) => (
  <>
    <Helmet>
      <title>Agreements Search Results</title>
    </Helmet>
    <Container fluid={true}>
      <Row style={{ marginTop: 20 }}>
        <Col sm={12}>
          <h1 style={{marginBottom: 20}}>Search results for {search}</h1>
          <AgreementsListSearch search={search} />
        </Col>
      </Row>
    </Container>
  </>
)

export default RecourseSearchScreen
