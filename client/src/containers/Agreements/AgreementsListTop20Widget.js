/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Table } from 'react-bootstrap'
import WindowWidget from '../../components/WindowWidget'
import ButtonLink from '../../components/ButtonLink'
import { getApiById } from '../../store/utils/api'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import * as moment from 'moment'
import QueryWrap from "../../components/QueryWrap";
import AgreementsListComponent from "./AgreementsListComponent";

const GRAPH_QUERY = gql`
  {
    countdownGriefingEscrows(
      first: 20
      orderBy: createdTimestamp
      orderDirection: desc
    ) {
      id
      creator
      operator
      buyer
      seller
      paymentAmount
      stakeAmount
      countdownLength
      agreementParams
      deadline
      data
      dataB58
      dataSubmitted
      paymentDeposited
      stakeDeposited
      finalized
      cancelled
      metadata
      metadataB58
      initMetadata
      initMetadataB58
      initCallData
      createdTimestamp
    }
  }
`



export const AgreementsListTop20Widget = () => {
  return (

        <AgreementsListComponent query={GRAPH_QUERY} title={'Last 20 Agreements'}/>

  )
}

export default AgreementsListTop20Widget
