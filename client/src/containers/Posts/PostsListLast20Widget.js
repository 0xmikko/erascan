/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { gql } from 'apollo-boost'

import QueryWrap from '../../components/QueryWrap'
import WindowWidget from '../../components/WindowWidget'
import PostListComponent from './PostListComponent'

const GRAPH_QUERY = gql`
  {
    posts(first: 20, orderBy: createdTimestamp, orderDirection: desc) {
      id
      feed {
        id
      }
      creator
      operator
      staticMetadataB58
      proofHash
      createdTimestamp
    }
  }
`

const PostsListLast20Widget = () => (
  <WindowWidget title={'Last Posts'}>
    <QueryWrap query={GRAPH_QUERY}>
      <PostListComponent />
    </QueryWrap>
  </WindowWidget>
)

export default PostsListLast20Widget
