/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import SearchBarWidget from '../../components/SearchBarWidget'
import {prefix} from "./Entity";

export default ({ history }) => (
  <SearchBarWidget
    prefix={prefix}
    title={'Erasure track record search'}
    history={history}
  />
)
