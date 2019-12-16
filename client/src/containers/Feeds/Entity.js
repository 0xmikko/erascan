/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import { isEthAddress } from '../../utils/isEthAddress'
import * as Yup from 'yup'

export const itemName = 'feed'
export const itemNamePlural = 'feeds'
export const prefix = '/feeds/'
export const listFields = `
  id
  creator
  operator
  hashes
  createdTimestamp
  `

export const fields = [
  { name: 'ID', field: 'id', readOnly: true },
  {
    name: 'Creator',
    field: 'creator',
    type: 'Address',
    editable: false,
  },
  {
    name: 'Operator',
    field: 'operator',
    type: 'Address',
    sm: 12,
    validation: isEthAddress,
  },
  {
    name: 'Metadata',
    field: 'metadata',
    sm: 12,
    validation: Yup.string(),
  },
  { name: 'MetadataB58', field: 'metadataB58', readOnly: true },
  {
    name: 'Initial metadata',
    field: 'initMetadata',
    readOnly: true,
  },
  { name: 'Initial metadataB58', field: 'initMetadataB58', readOnly: true },
  { name: 'Initial calldata', field: 'initCallData', readOnly: true },
  {
    name: 'Created',
    field: 'createdTimestamp',
    type: 'Timestamp',
    readOnly: true,
  },
]
