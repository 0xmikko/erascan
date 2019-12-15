/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import DetailsWidget from '../../components/Widgets/DetailsWidget'
import { fields, itemName } from "../Feeds/Entity";

// const itemName = 'countdownGriefingEscrow'
//
// const fields = [
//   { name: 'ID', field: 'id' },
//   { name: 'Creator', field: 'creator', type: 'Address' },
//   { name: 'Operator', field: 'operator', type: 'Address' },
//   { name: 'Buyer', field: 'buyer', type: 'Address' },
//   { name: 'Seller', field: 'seller', type: 'Address' },
//   { name: 'Payment Amount', field: 'paymentAmount' },
//   { name: 'Stake Amount', field: 'stakeAmount' },
//   { name: 'Countdown Length', field: 'countdownLength' },
//   { name: 'Agreement params', field: 'agreementParams' },
//   { name: 'Deadline', field: 'deadline' },
//   { name: 'Data', field: 'data' },
//   { name: 'DataB58', field: 'dataB58' },
//   { name: 'Data submitted', field: 'dataSubmitted' },
//   { name: 'Payment deposited', field: 'paymentDeposited' },
//   { name: 'Stake deposited', field: 'stakeDeposited' },
//   { name: 'Finalized', field: 'finalized' },
//   { name: 'Cancelled', field: 'cancelled' },
//   { name: 'Metadata', field: 'metadata' },
//   { name: 'MetadataB58', field: 'metadataB58' },
//   { name: 'Initial metadata', field: 'initMetadata' },
//   { name: 'Initial metadataB58', field: 'initMetadataB58' },
//   { name: 'Initial calldata', field: 'initCallData' },
//   { name: 'Created', field: 'createdTimestamp' },
// ]

export default ({ id }) => (
  <DetailsWidget id={id} fields={fields} itemName={itemName} />
)
