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

const ItemsList = ({ data, itemName, renderItem, renderThead }) => {
  const items = data[itemName]
  return (
    <Table style={{ margin: 0, width: '100%' }} cellSpacing={0} cellPadding={0}>
      {renderThead}
      <tbody>{items.map(renderItem)}</tbody>
    </Table>
  )
}

export default ({
  query,
  title,
  variables,
  itemName,
  renderItem,
  rightToolbar,
  renderThead,
}) => (
  <>
    <h2>{title}</h2>
    <WindowWidget>
      <QueryWrap query={query} variables={variables}>
        <ItemsList
          itemName={itemName}
          renderItem={renderItem}
          renderThead={renderThead}
        />
      </QueryWrap>
    </WindowWidget>
  </>
)
