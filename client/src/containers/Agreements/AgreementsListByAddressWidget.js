/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { gql } from 'apollo-boost'
import AgreementsListComponent from './AgreementsListComponent'
import { itemNamePlural} from "./Entity";

const graphQuery = gql`
  query agreements($address: String){
  
    ${itemNamePlural}(
      where: { creator: $address }
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
      createdTimestamp
    }
  }
`

export default ({ id }) => (
    <AgreementsListComponent
        query={graphQuery}
        title={`Agreements by ${id}`}
        variables={{address: id}}
    />
)
