/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { connect } from 'redux'
import EthLink from "../../components/EthLink";

export default ({ id, label }) => <EthLink prefix={'/feed/'} label={label} id={id} />

