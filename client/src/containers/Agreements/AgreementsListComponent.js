/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import { fromNow } from '../../utils/humandate'
import ListWidget from '../../components/Widgets/ListWidget'
import ButtonLink from '../../components/ButtonLink'
import AgreementLink from './AgreementLink'
import AddressLink from '../Address/AddressLink'
import UserAvatar from 'react-user-avatar'
import { prefix } from './Entity'

const renderThead = (
  <thead >
    <td>&nbsp;</td>
    <td>ID</td>
    <td>Creator</td>
    <td align={'center'}>Payment</td>
    <td align={'center'}>Stake</td>
    <td align={'right'}>Buyer / Seller</td>
  </thead>
)

const renderItem = e => (
  <tr key={e.id}>
    <td width={50}>
      <UserAvatar size="48" name="Agreement" color={'rgba(64,204,196,0.36)'} />
    </td>
    <td>
      <AgreementLink id={e.id} shorten={true} />
      <br />
      {fromNow(e.createdTimestamp)}
    </td>
    <td>
      <AddressLink id={e.creator} shorten={true} label={'Creator'} />
      <br />
      <AddressLink id={e.operator} shorten={true} label={'Operator'} />
    </td>

    <td align={'center'}>{e.paymentAmount / Math.pow(10, 18)}</td>
    <td align={'center'}>{e.stakeAmount / Math.pow(10, 18)}</td>
    <td align={'right'}>
      <AddressLink id={e.buyer} shorten={true} label={'Buyer'} />
      <br />
      <AddressLink id={e.seller} shorten={true} label={'Seller'} />
    </td>
  </tr>
)

const rightToolbar = <ButtonLink to={prefix + 'new'} title={'New agreement'} />

export default ({ query, title, variables }) => (
  <>
    <ListWidget
      query={query}
      title={title}
      variables={variables}
      itemName={'countdownGriefingEscrows'}
      renderThead={renderThead}
      renderItem={renderItem}
      rightToolbar={rightToolbar}
    />
  </>
)
