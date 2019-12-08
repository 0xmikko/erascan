/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container } from 'react-bootstrap'

import SearchBarWidget from '../containers/SearchBar/SearchBarWidget'
import AgreementsListTop20Widget from "../containers/Agreements/AgreementsListTop20Widget";

const RecourseScreen = () => (

      <Container fluid={true}>
        <Row style={{ marginTop: 40 }}>
          <Col sm={12}>
            <SearchBarWidget />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col sm={12}>
            <AgreementsListTop20Widget />
          </Col>
        </Row>
      </Container>
)



export default RecourseScreen
