/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import { Table } from 'react-bootstrap'
import { fromNow } from '../../utils/humandate'
import EthLink from '../../components/EthLink'
import WindowWidget from '../../components/WindowWidget'
import QueryWrap from '../../components/QueryWrap'
import ListWidget from '../../components/Widgets/ListWidget'
import ButtonLink from "../../components/ButtonLink";

const renderItem = e => (
  <tr key={e.id}>
    <td width={'50%'}>
      <EthLink id={e.id} prefix={'/agreement/'} />
      <div className={'TimeFont'}>{fromNow(e.createdTimestamp)}</div>
    </td>
    <td align={'right'}>
      <EthLink
        id={e.creator}
        label={'Feed'}
        prefix={'/address/'}
        shorten={false}
      />
      <EthLink
        id={e.operator}
        label={'Operator'}
        prefix={'/address/'}
        shorten={true}
      />
    </td>
  </tr>
)

const rightToolbar = (
    <ButtonLink to={'/agreements/new'} title={'New agreement'} />
)

export default ({ query, title, variables }) => (
  <ListWidget
    title={title}
    query={query}
    variables={variables}
    itemName={'countdownGriefingEscrows'}
    renderItem={renderItem}
    rightToolbar={rightToolbar}
  />
)
