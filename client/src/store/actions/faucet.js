/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import { RSAA } from 'redux-api-middleware'
import { getApiById } from '../utils/api'
import * as actionTypes from './actionTypes'

export const giveNMR = address => {
  console.log(address)
  return {
    [RSAA]: {
      endpoint: getApiById('/api/faucet/:id/', address),
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        {
          type: actionTypes.FAUCET_REQUEST,
        },
        {
          type: actionTypes.FAUCET_SUCCESS,
        },
        {
          type: actionTypes.FAUCET_FAILURE,
        },
      ],
    },
  }
}
