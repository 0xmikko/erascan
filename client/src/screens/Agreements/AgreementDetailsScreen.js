/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {Helmet} from "react-helmet";

import AgreementDetailsWidget from "../../containers/Agreements/AgreementDetailsWidget";

const AgreementDetailsScreen = ({
  match: {
    params: { id },
  },
}) => (
  <>
    <Helmet>
      <title>Agreement {id}</title>
    </Helmet>
    <Container fluid={true}>
      <Row style={{ marginTop: 40 }}>
        <Col sm={12}>
          <h1 style={{marginBottom: 20}}>Agreement {id}</h1>
          <AgreementDetailsWidget id={id} />
        </Col>
      </Row>
    </Container>
  </>
)

export default AgreementDetailsScreen
