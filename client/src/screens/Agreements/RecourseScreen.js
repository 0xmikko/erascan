/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import AgreementsSearchBar from '../../containers/Agreements/AgreementsSearchBar'
import { AgreementsListLatestWidget } from '../../containers/Agreements/AgreementsListWidget'

const RecourseScreen = ({history}) => (
  <>
    <Container fluid={true}>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <AgreementsSearchBar history={history} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col sm={12}>
          <AgreementsListLatestWidget  />
        </Col>
      </Row>
    </Container>
  </>
)

export default RecourseScreen
