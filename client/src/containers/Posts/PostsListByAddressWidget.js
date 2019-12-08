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
import QueryWrap from '../../components/QueryWrap'
import PostListComponent from './PostListComponent'
const GRAPH_QUERY = gql`
    query postsByAddress($feedid: String) {
      posts(where: { feed: $feedid}, orderBy: createdTimestamp, orderDirection: desc) {
        id
        creator
        operator
        staticMetadataB58
        proofHash
        createdTimestamp
      }
    }
`

export const PostsListByAddressWidget = props => {
  return (
    <WindowWidget title={'Posts by '}>
      <QueryWrap
        query={GRAPH_QUERY}
        variables={{ $feedid: '0x53188c43cb6bd34c3d888cd373721071e0e542fe' }}
      >
        <PostListComponent />
      </QueryWrap>
    </WindowWidget>
  )
}

export default PostsListByAddressWidget
