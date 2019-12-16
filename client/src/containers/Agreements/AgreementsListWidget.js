/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { gql } from 'apollo-boost'
import AgreementsListComponent from './AgreementsListComponent'
import { listFields, itemNamePlural } from './Entity'

export const AgreementsListLatestWidget = () => {
  const graphQuery = gql`
  {
    ${itemNamePlural}(
      first: 20
      orderBy: createdTimestamp
      orderDirection: desc
    ) {
       ${listFields}
    }
  }
`
  return (
    <AgreementsListComponent query={graphQuery} title={'Last 20 Agreements'} />
  )
}

export const AgreementsListByAddressWidget = ({ id }) => {
  const graphQuery = gql`
  query agreements($address: String){
  
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
    <AgreementsListComponent
      query={graphQuery}
      title={`Agreements by ${id}`}
      variables={{ address: id }}
    />
  )
}

export const AgreementsListSearch = ({ search }) => {
  const graphQuery = gql`
  query($search: String) {
    ${itemNamePlural}(
      where: { creator: $search }
      orderBy: createdTimestamp
      orderDirection: desc
    ) {
       ${listFields}
    }
  }
`
  return (
    <AgreementsListComponent
      query={graphQuery}
      title={`Agreements found`}
      variables={{ search }}
    />
  )
}
