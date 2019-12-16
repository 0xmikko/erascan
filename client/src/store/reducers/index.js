/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import web3, * as fromWeb3 from './web3'
import feeds, * as fromFeed from './feeds'

export default history =>
  combineReducers({
    router: connectRouter(history),
    feeds,
    web3,
  })

export const Web3 = state => fromWeb3.web3(state.web3)
export const web3status = state => fromWeb3.web3status(state.web3)
export const accounts = state => fromWeb3.accounts(state.web3)
export const transactionUpdates = state => fromFeed.transactionUpdates(state.feeds)
