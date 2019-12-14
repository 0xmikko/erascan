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
import EthLink from "../../components/EthLink";
import WindowWidget from "../../components/WindowWidget";
import QueryWrap from "../../components/QueryWrap";

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


const PostsList = ({ data: { posts } }) => (
  <Table style={{ margin: 0 }}>
    <tbody>{posts.map(renderItem)}</tbody>
  </Table>
)

export default ({ query, title, id }) => (
    <WindowWidget title={title}>
        <QueryWrap query={query} variables={{ id }}>
            <PostsList />
        </QueryWrap>
    </WindowWidget>
)
