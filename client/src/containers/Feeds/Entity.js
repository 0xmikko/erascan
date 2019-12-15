/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import { isEthAddress } from '../../utils/isEthAddress'
import * as Yup from 'yup'

export const itemName = 'feed'

export const fields = [
  { name: 'ID', field: 'id', readOnly: true },
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
    validation: Yup.string().required('Required'),
  },
  { name: 'MetadataB58', field: 'metadataB58', readOnly: true },
  {
    name: 'Initial metadata',
    field: 'initMetadata',
    sm: 12,
    validation: Yup.string().required('Required'),
  },
  { name: 'Initial metadataB58', field: 'initMetadataB58', readOnly: true },
  { name: 'Initial calldata', field: 'initCallData', readOnly: true },
  { name: 'Created', field: 'createdTimestamp', readOnly: true },
]
