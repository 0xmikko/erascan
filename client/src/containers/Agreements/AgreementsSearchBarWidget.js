/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import SearchBarWidget from '../../components/SearchBarWidget'
import { prefix } from "../Feeds/Entity";

export default ({ history }) => (
  <SearchBarWidget
    prefix={prefix}
    title={'Erasure agreements search'}
    history={history}
  />
)
