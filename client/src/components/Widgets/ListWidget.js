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

const ItemsList = ({ data, itemName, renderItem }) => {
  const items = data[itemName]
  return (
    <Table style={{ margin: 0 }}>
      <tbody>{items.map(renderItem)}</tbody>
    </Table>
  )
}

export default ({ query, title, variables, itemName, renderItem, rightToolbar }) => (
  <WindowWidget title={title} rightToolbar={rightToolbar}>
    <QueryWrap query={query} variables={variables}>
      <ItemsList itemName={itemName} renderItem={renderItem}/>
    </QueryWrap>
  </WindowWidget>
)
