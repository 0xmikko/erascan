/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import { Table } from 'react-bootstrap'
import AddressLink from '../Address/AddressLink'
import PostLink from './PostLink'
import { fromNow } from '../../utils/humandate'

export default ({ data: { posts } }) => (
  <Table style={{ margin: 0 }}>
    <tbody>
      {posts.map(e => (
        <tr key={e.id}>
          <td width={'50%'}>
            <PostLink id={e.id} />
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
