/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Container, Table } from 'react-bootstrap'
import TableHeader from './TableHeader'

/**
 * This component renders table-type views
 */
function TableListView(props) {
  const renderTable = (
    <Table style={{ marginTop: 14 }} hover>
      <TableHeader tableHeader={props.tableHeader} />
      <tbody>{props.items}</tbody>
    </Table>
  )

  return (
    <Container fluid style={{ padding: 0 }}>
      {props.modalForms}
      {props.toolbar}
      {renderTable}
    </Container>
  )
}

export default TableListView
