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
import faucets, * as fromFaucet from './faucet'

export default history =>
  combineReducers({
    router: connectRouter(history),
    faucets,
    feeds,
    web3,
  })

export const Web3 = state => fromWeb3.web3(state.web3)
export const web3status = state => fromWeb3.web3status(state.web3)
export const accounts = state => fromWeb3.accounts(state.web3)
export const transactionUpdates = state =>
  fromFeed.transactionUpdates(state.feeds)
export const faucet = state => fromFaucet.faucet(state.faucets)
