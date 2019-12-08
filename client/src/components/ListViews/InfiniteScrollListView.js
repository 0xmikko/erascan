/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroller'
import TableListView from './TableListView'

const InfiniteScrollListView = props => {
  return (
    <InfiniteScroll page={1} loadMore={props.loadMore} hasMore={props.hasMore}>
      <TableListView tableHeader={props.tableHeader} items={props.items} />
    </InfiniteScroll>
  )
}

export default InfiniteScrollListView
