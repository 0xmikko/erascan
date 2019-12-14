/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import AddressLink from '../Address/AddressLink'
import { fromNow } from '../../utils/humandate'
import EthLink from "../../components/EthLink";
import ListWidget from "../../components/Widgets/ListWidget";

const renderItem = e => (
  <tr key={e.id}>
    <td width={'50%'}>
      <EthLink prefix={'/post/'} id={e.id} shorten={true}/>
      <div className={'TimeFont'}>{fromNow(e.createdTimestamp)}</div>
    </td>
    <td align={'right'}>
      <AddressLink id={e.creator} prefix={'Feed'} />
      <AddressLink id={e.operator} prefix={'Operator'} />
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
