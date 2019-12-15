/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container } from 'react-bootstrap'
import {Helmet} from "react-helmet";

import FeedsListByAddressWidget from '../containers/Feeds/FeedsListByAddressWidget'
import AgreementsListByAddressWidget from "../containers/Agreements/AgreementsListByAddressWidget";




const FeedDetailsScreen = ({
  clientDetails,
  getClientDetails,
  match,
  history,
}) => {
  const { id, tab } = match.params



  return (
    <>
      <Helmet>
        <title>Address {id}</title>
      </Helmet>
      <Container style={{ marginTop: 20 }}>
        <h1>Address {id}</h1>
        <Row>
          <Col sm={12}>
            <FeedsListByAddressWidget id={id} />
          </Col>
          <Col sm={12}>
            <AgreementsListByAddressWidget id={id} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  // getClientDetails: id => dispatch(actions.getClientDetails(id))
})

const mapStateToProps = state => ({
  // clientDetails: reducers.clientDetails(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedDetailsScreen)
