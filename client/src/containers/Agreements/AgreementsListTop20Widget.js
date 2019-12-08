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
    oneWayGriefingAgreements(
      first: 20
      orderBy: createdTimestamp
      orderDirection: desc
    ) {
      id
      creator
      staker
      counterparty
      operator
      ratio
      ratioType
      stake
      token
      staticMetadataB58
      createdTimestamp
    }
  }
`

export const AgreementsListTop20Widget = () => {
  return (
    <WindowWidget title={'Last 20 Agreements'}>
      <QueryWrap query={GRAPH_QUERY}>
        <AgreementsListComponent />
      </QueryWrap>
    </WindowWidget>
  )
}

export default AgreementsListTop20Widget
