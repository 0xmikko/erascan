/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Table } from 'react-bootstrap'
import WindowWidget from '../../components/WindowWidget'
import ButtonLink from '../../components/ButtonLink'
import { getApiById } from '../../store/utils/api'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import * as moment from 'moment'
import DetailsWidget from '../../components/Widgets/DetailsWidget'
import HashesListByFeedWidget from '../Hashes/HashesListByFeedWidget'

const itemName = 'feeds'

const fields = [
  { name: 'ID', field: 'id' },
  { name: 'Operator', field: 'operator', type: 'Address' },
  { name: 'Metadata', field: 'metadata' },
  { name: 'MetadataB58', field: 'metadataB58' },
  { name: 'Initial metadata', field: 'initMetadata' },
  { name: 'Initial metadataB58', field: 'initMetadataB58' },
  { name: 'Initial calldata', field: 'initCallData' },
  { name: 'Created', field: 'createdTimestamp' },
]

export default ({ id }) => (
  <>
    <DetailsWidget id={id} fields={fields} itemName={itemName} />
    <HashesListByFeedWidget />
  </>
)
