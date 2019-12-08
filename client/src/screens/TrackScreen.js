/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import SearchBarWidget from '../containers/SearchBar/SearchBarWidget'
import PostsListLast20Widget from '../containers/Posts/PostsListLast20Widget'
import FeedWidget from '../containers/Feeds/FeedsListLast20Widget'

const TrackScreen = () => (
  <Container fluid={true}>
    <Row style={{ marginTop: 40 }}>
      <Col sm={12}>
        <SearchBarWidget />
      </Col>
    </Row>
    <Row style={{ marginTop: 20 }}>
      <Col sm={6}>
        <PostsListLast20Widget />
      </Col>
      <Col sm={6}>
        <FeedWidget />
      </Col>
    </Row>
  </Container>
)

export default TrackScreen
