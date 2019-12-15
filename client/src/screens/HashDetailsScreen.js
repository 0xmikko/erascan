/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import HashDetailsWidget from '../containers/Hashes/HashDetailsWidget'
import {Helmet} from "react-helmet";

const HashDetailsScreen = ({
  match: {
    params: { id },
  },
}) => (
  <>
    <Helmet>
      <title>Post {id}</title>
    </Helmet>
    <Container fluid={true}>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <h1>Post {id}</h1>
          <HashDetailsWidget id={id} />
        </Col>
      </Row>
    </Container>
  </>
)

export default HashDetailsScreen
