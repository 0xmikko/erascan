/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {Helmet} from "react-helmet";

import FeedDetailsWidget from '../../containers/Feeds/FeedDetailsWidget'
import HashesListByFeedWidget from '../../containers/Hashes/HashesListByFeedWidget'


const FeedDetailsScreen = ({
  match: {
    params: { id },
  },
}) => (
  <>
    <Helmet>
      <title>Feed {id}</title>
    </Helmet>
    <Container style={{ marginTop: 20 }} fluid={true}>
      <h1>Feed {id}</h1><br />
      <Row>
        <Col sm={12}>
          <FeedDetailsWidget id={id} />
          <br />
          <br />
          <HashesListByFeedWidget id={id} />
        </Col>
      </Row>
    </Container>
  </>
)

export default FeedDetailsScreen
