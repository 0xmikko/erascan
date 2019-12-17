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
import FeedLink from './FeedLink'
import ButtonLink from '../../components/ButtonLink'
import UserAvatar from 'react-user-avatar'

const renderThead = (
  <thead>
    <tr>
      <td>&nbsp;</td>
      <td>ID</td>
      <td align={'center'}>Author</td>
      <td align={'center'}># of Hashes</td>
    </tr>
  </thead>
)

const renderItem = e => (
  <tr key={e.id}>
    <td width={50}>
      <UserAvatar size="48" name="Feed" color={'#4cd23d'} />
    </td>
    <td>
      <FeedLink id={e.id} /><br />
        {fromNow(e.createdTimestamp)}
    </td>
    <td align={'center'}>
      <AddressLink id={e.creator} label={'Creator'} />
      <br />
      <AddressLink id={e.operator} label={'Operator'} />
    </td>
    <td align={'center'}>{e.hashes ? e.hashes.length : ""}</td>
  </tr>
)

const rightToolbar = <ButtonLink to={'/feeds/new'} title={'New Feed'} />

export default ({ query, title, variables }) => (
  <ListWidget
    title={title}
    query={query}
    variables={variables}
    itemName={'feeds'}
    renderThead={renderThead}
    renderItem={renderItem}
    rightToolbar={rightToolbar}
  />
)
