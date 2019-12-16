/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import EthLink from '../../components/EthLink'
import { prefix } from './Entity'

export default ({ id, label, shorten }) => (
  <EthLink prefix={prefix} label={label} id={id} shorten={shorten}/>
)
