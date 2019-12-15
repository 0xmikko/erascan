/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import FeedDetailsWidget from '../containers/Feeds/FeedDetailsWidget'
import HashesListByFeedWidget from '../containers/Hashes/HashesListByFeedWidget'
import Web3Wrapper from '../components/Web3Wrapper'
import AgreementCreateWidget from '../containers/Agreements/AgreementCreateWidget'
import FeedCreateWidget from '../containers/Feeds/FeedCreateWidget'

const FeedDetailsScreen = ({
  match: {
    params: { id },
  },
}) => (
  <>
    <Helmet>
      <title>Create New Feed</title>
    </Helmet>
    <Web3Wrapper>
      <Container fluid={true}>
        <Row style={{ marginTop: 40 }}>
          <Col sm={12}>
            <h1 style={{ marginBottom: 20 }}>Create New Agreement</h1>
            <FeedCreateWidget />
          </Col>
        </Row>
      </Container>
    </Web3Wrapper>
  </>
)

export default FeedDetailsScreen
