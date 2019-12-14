/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import RecourseSearchBarWidget from '../containers/SearchBarWidget/RecourseSearchBarWidget'
import AgreementsListTop20Widget from '../containers/Agreements/AgreementsListTop20Widget'

const RecourseScreen = ({history}) => (
  <>
    <Container fluid={true}>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <RecourseSearchBarWidget history={history} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={12}>
          <AgreementsListTop20Widget />
        </Col>
      </Row>
    </Container>
  </>
)

export default RecourseScreen
