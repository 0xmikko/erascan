/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import FeedDetailsWidget from '../containers/Feeds/FeedDetailsWidget'
import PostsListByFeedWidget from '../containers/Posts/PostsListByFeedWidget'

const FeedDetailsScreen = ({
  match: {
    params: { id },
  },
}) => (
  <>
    <Container style={{ marginTop: 20 }}>
      <h1>Feed {id}</h1>
      <Row>
        <Col sm={12}>
          <FeedDetailsWidget id={id} />
          <br />
          <br />
          <PostsListByFeedWidget id={id} />
        </Col>
      </Row>
    </Container>
  </>
)

export default FeedDetailsScreen
