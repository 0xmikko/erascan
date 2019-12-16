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
  status: status.STATUS_UPDATE_NEEDED,
  error: null,
}

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.FAUCET_REQUEST:
      return updateState(state, {
        ...state,
        status: status.STATUS_LOADING,
        error: null,
      })

    case actionTypes.FAUCET_SUCCESS:
      return updateState(state, {
        ...state,
        status: status.STATUS_SUCCESS,
        error: null,
      })

    case actionTypes.FAUCET_FAILURE:
      console.log(action)
      return updateState(state, {
        ...state,
        status: status.STATUS_FAILURE,
        error: action.payload.response.error || 'error' ,
      })


    default:
      return state
  }
}

export const faucet = state => state
