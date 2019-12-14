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
const GRAPH_QUERY = gql`
  query search($search: String) {
    feeds(where: { creator: $search }) {
      id
      creator
      operator
      hashes
    }
  }
`

export const FeedsListSearchWidget = ({ search }) => {
  console.log(search)
  return (
    <FeedListComponent
      title={'Search results'}
      query={GRAPH_QUERY}
      variables={{ search }}
    />
  )
}

export default FeedsListSearchWidget
