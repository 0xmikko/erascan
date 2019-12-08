/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { connect } from 'redux'

export default ({ id, prefix }) => {
  return (
    <div style={{ fontSize: '14px' }}>
        {prefix} <a href={'/post/' + id}>{id.substr(0, 20)}...</a>
    </div>
  )
}
