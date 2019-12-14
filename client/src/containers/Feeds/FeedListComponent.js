/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Table } from 'react-bootstrap'

import AddressLink from '../Address/AddressLink'
import WindowWidget from '../../components/WindowWidget'
import QueryWrap from '../../components/QueryWrap'
import EthLink from '../../components/EthLink'
import { fromNow } from '../../utils/humandate'
import ListWidget from '../../components/Widgets/ListWidget'
import FeedLink from "./FeedLink";

const renderItem = e => (
  <tr key={e.id}>
    <td width={'50%'}>
      <FeedLink id={e.id} />
      <div className={'TimeFont'}>{fromNow(e.createdTimestamp)}</div>
    </td>
    <td align={'right'}>
      <AddressLink id={e.creator} prefix={'Author'} />
      <AddressLink id={e.creator} prefix={'Feed'} />
    </td>
  </tr>
)

export default ({ query, title, variables }) => (
  <ListWidget
    title={title}
    query={query}
    variables={variables}
    itemName={'feeds'}
    renderItem={renderItem}
  />
)
