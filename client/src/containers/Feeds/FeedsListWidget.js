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
import FeedListComponent from './FeedListComponent'
import { itemNamePlural, listFields } from './Entity'
import AgreementsListComponent from "../Agreements/AgreementsListComponent";

export const FeedsListLatestWidget = () => {
  const graphQuery = gql`
  {
    feeds(first: 20, orderBy: createdTimestamp, orderDirection: desc) {
     ${listFields}
    }
  }
`
  return <FeedListComponent query={graphQuery} title={'Last 20 feeds'} />
}

export const FeedsListSearchWidget = ({ search }) => {
  const graphQuery = gql`
  query search($search: String) {
    
    ${itemNamePlural}(where: { creator: $search }) {
     ${listFields}
    }
    
     
  }
`
  return (
    <FeedListComponent
      title={`Search results for ${search}`}
      query={graphQuery}
      variables={{ search }}
    />
  )
}

export const FeedsListByAddressWidget = ({ id }) => {
  const graphQuery = gql`
  query feeds($address: String){
  
    ${itemNamePlural}(
      where: { operator: $address }
      orderBy: createdTimestamp
      orderDirection: desc
    ) {
       ${listFields}
    }
    
    ${itemNamePlural}(
      where: { creator: $address }
      orderBy: createdTimestamp
      orderDirection: desc
    ) {
       ${listFields}
    }
    
   
  }
`
  return (
    <FeedListComponent
      title={'Feeds by ' + id}
      query={graphQuery}
      variables={{ address: id }}
    />
  )
}
