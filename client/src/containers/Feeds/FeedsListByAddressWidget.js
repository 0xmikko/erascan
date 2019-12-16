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

const graphQuery = gql`
  query feeds($address: String){
  
    feeds(
      where: { operator: $address }
      orderBy: createdTimestamp
      orderDirection: desc
    ) {
      id
      creator
      operator
      createdTimestamp
    }
  }
`

export const FeedsListByAddressWidget = ({ id }) => (
  <FeedListComponent title={'Feeds by ' + id} query={graphQuery} variables={{address: id}} />
)

export default FeedsListByAddressWidget
