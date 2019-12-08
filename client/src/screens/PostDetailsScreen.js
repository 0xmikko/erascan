/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import PostDetailsWidget from '../containers/Posts/PostDetailsWidget'

const PostDetailsScreen = ({
  match: {
    params: { id },
  },
}) => (
  <>
    <Container>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <h1>Post {id}</h1>
          <PostDetailsWidget id={id} />
        </Col>
      </Row>
    </Container>
  </>
)

export default PostDetailsScreen
