/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import { fromNow } from '../../utils/humandate'
import ListWidget from '../../components/Widgets/ListWidget'
import ButtonLink from "../../components/ButtonLink";
import AgreementLink from "./AgreementLink";
import AddressLink from "../Address/AddressLink";
import { prefix} from "./Entity";

const renderItem = e => (
  <tr key={e.id}>
    <td width={'50%'}>
      <AgreementLink id={e.id}/>
      <div className={'TimeFont'}>{fromNow(e.createdTimestamp)}</div>
    </td>
    <td align={'right'}>
      <AddressLink
        id={e.creator}
        label={'Feed'}
      />
      <AddressLink
        id={e.operator}
        label={'Operator'}
      />
    </td>
  </tr>
)

const rightToolbar = (
    <ButtonLink to={prefix + 'new'} title={'New agreement'} />
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
