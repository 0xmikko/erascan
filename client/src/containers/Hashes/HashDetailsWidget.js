/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import * as moment from 'moment'
import DetailsWidget from "../../components/Widgets/DetailsWidget";

const itemName = 'hashSubmittedFeeds'

const fields = [
    { name: 'ID', field: 'id' },
    { name: 'Hash', field: 'hash' },
    { name: 'BlockNumber', field: 'blockNumber' },
    { name: 'TX Hash', field: 'txHash' },
    { name: 'logIndex', field: 'logIndex' },
    { name: 'Created', field: 'timestamp' },
]

export default ({ id }) => (
    <DetailsWidget id={id} fields={fields} itemName={itemName} />
)
