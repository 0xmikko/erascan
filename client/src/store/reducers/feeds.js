/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import { updateState } from '../utils/updateState'
import * as actionTypes from '../actions/actionTypes'
import * as status from '../utils/status'

const initialState = {
  transactionUpdates: [],
}

const updateTransactionInfo = (state, updateHash, newObj) => {
  const { transactionUpdates } = state
  transactionUpdates[updateHash] = newObj
  return updateState(state, {
    ...state,
    transactionUpdates: updateState(
        state.transactionUpdates,
        transactionUpdates
    ),
  })
}


export default (state = initialState, action) => {

  console.log(action)
  const updateHash = action.meta ? action.meta.updateHash || '0' : '0'

  switch (action.type) {
    case actionTypes.CREATE_FEED_REQUEST:
      return updateTransactionInfo(state, updateHash,  {
        status: status.STATUS_LOADING,
      })

    case actionTypes.CREATE_FEED_TRANSACTION_HASH:
      return updateTransactionInfo(state, updateHash,  {
        status: status.STATUS_SUCCESS,
      })

    case actionTypes.CREATE_FEED_RECEIPT:
      return state //
    // updateState(state, {
    //     paymentStatus: status.STATUS_LOADING,
    // })

    case actionTypes.CREATE_FEED_ERROR:
      return updateTransactionInfo(state, updateHash,  {
        status: status.STATUS_FAILURE,
      })

    default:
      return state
  }
}

export const transactionUpdates = state => state.transactionUpdates
