/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import WindowWidget from '../../components/WindowWidget'

import { gql } from 'apollo-boost'
import QueryWrap from '../../components/QueryWrap'
import FeedListComponent from './FeedListComponent'

const GRAPH_QUERY = gql`
  {
    feeds(first: 20, orderBy: createdTimestamp, orderDirection: desc) {
      id
      creator
      operator
      staticMetadataB58
      createdTimestamp
    }
  }
`

export const FeedsWidget = ({ id }) => (
  <FeedListComponent title={'Posts by ' + id} query={GRAPH_QUERY} id={id} />
)

export default FeedsWidget
