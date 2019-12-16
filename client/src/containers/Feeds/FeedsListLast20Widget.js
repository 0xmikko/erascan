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
const graphQuery = gql`
  {
    feeds(first: 20, orderBy: createdTimestamp, orderDirection: desc) {
      id
      creator
      operator
      createdTimestamp
    }
  }
`

export const FeedsListLast20Widget = () => (
  <FeedListComponent title={'Last 20 feeds'} query={graphQuery} />
)

export default FeedsListLast20Widget
