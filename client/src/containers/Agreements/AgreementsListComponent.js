/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import { Table } from 'react-bootstrap'
import AddressLink from '../Address/AddressLink'
import { fromNow } from '../../utils/humandate'

export default ({ data: { oneWayGriefingAgreements } }) => (
  <Table style={{ margin: 0 }}>
    <tbody>
      {oneWayGriefingAgreements.map(e => (
        <tr key={e.id}>
          <td width={'50%'}>
            <AddressLink id={e.id} />
            <div className={'TimeFont'}>{fromNow(e.createdTimestamp)}</div>
          </td>
          <td align={'right'}>
            <AddressLink id={e.creator} prefix={'Feed'} />
            <AddressLink id={e.operator} prefix={'Operator'} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)
