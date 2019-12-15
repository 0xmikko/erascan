/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import * as Yup from "yup";
import { isEthAddress } from "../../utils/isEthAddress";

export const itemName = 'countdownGriefingEscrow'

export const fields = [
    {
        name: 'ID',
        field: 'id',
        readOnly: true
    },
    {
        name: 'Creator',
        field: 'creator',
        type: 'Address',
        sm: 12,
        validation: isEthAddress,
    },
    {
        name: 'Operator',
        field: 'operator',
        type: 'Address',
        sm: 12,
        validation: isEthAddress,
    },
    {
        name: 'Buyer',
        field: 'buyer',
        type: 'Address',
        sm: 12,
        validation: isEthAddress,
    },
    {
        name: 'Seller',
        field: 'seller',
        type: 'Address',
        sm: 12,
        validation: isEthAddress,
    },
    {
        name: 'Payment Amount',
        field: 'paymentAmount',
        sm: 12,
        validation: Yup.number().required('Required'),
    },
    {
        name: 'Stake Amount',
        field: 'stakeAmount',
        sm: 12,
        validation: Yup.number().required('Required'),
    },
    {
        name: 'Countdown Length',
        field: 'countdownLength',
        sm: 12,
        validation: Yup.string().required('Required'),
    },
    {
        name: 'Agreement params',
        field: 'agreementParams',
        sm: 12,
        validation: Yup.string().required('Required'),
    },
    {
        name: 'Deadline',
        field: 'deadline',
        sm: 12,
        validation: Yup.string().required('Required'),
    },
    {
        name: 'Data',
        field: 'data',
        sm: 12,
        validation: Yup.string().required('Required'),
    },
    {
        name: 'DataB58',
        field: 'dataB58',
        readOnly: true
    },
    {
        name: 'Data submitted',
        field: 'dataSubmitted',
        readOnly: true
    },
    {
        name: 'Payment deposited',
        field: 'paymentDeposited',
        readOnly: true
    },
    {
        name: 'Stake deposited',
        field: 'stakeDeposited',
        readOnly: true
    },
    {
        name: 'Finalized',
        field: 'finalized',
        readOnly: true
    },
    {
        name: 'Cancelled',
        field: 'cancelled',
        readOnly: true
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
        readOnly: true
    },
    {
        name: 'Initial metadataB58',
        field: 'initMetadataB58',
        readOnly: true
    },
    {
        name: 'Initial calldata',
        field: 'initCallData',
        readOnly: true,
    },
    { name: 'Created', field: 'createdTimestamp', readOnly: true },
]
