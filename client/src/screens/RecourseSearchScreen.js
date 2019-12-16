/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { AgreementsListSearch } from '../containers/Agreements/AgreementsListWidget'

const RecourseSearchScreen = ({
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
