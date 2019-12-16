/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import * as actionTypes from './actionTypes'
import FeedFactory from '../../contracts/Feed_Factory'
import { FEED_FACTORY_RINKEBY_ADDRESS } from '../../config'
import { abiEncodeWithSelector } from '../../utils/ethUtils'

export const createFeed = (feedCreateData, updateHash) => {
  // Getting data from feedCreate Data
  const { creator, operator, proofHash, metadata } = feedCreateData

  console.log('UHASH', updateHash)

  return async (dispatch, getState) => {

    // Get web3 instance
    const { web3 } = getState().web3

    // Dispatch Loading event
    dispatch({ type: actionTypes.CREATE_FEED_REQUEST, meta: { updateHash } })

    // Get feed instance for Rinkeby deployed contract
    const FeedFactoryInstance = new web3.eth.Contract(
      FeedFactory.abi,
      FEED_FACTORY_RINKEBY_ADDRESS
    )

    // Generate CallData for initalize function
    const callData = abiEncodeWithSelector(
      'initialize',
      ['address', 'bytes32', 'bytes'],
      [operator, proofHash, metadata]
    )

    // Execute contract call and set up events handlers
    await FeedFactoryInstance.methods
      .create(callData)
      .send({ from: creator })
      .on('error', function(error) {
        console.log('Error', error)
        dispatch({
          type: actionTypes.CREATE_FEED_TRANSACTION_HASH,
          payload: error.toString(),
          meta: { updateHash },
        })
      })
      .on('transactionHash', function(transactionHash) {
        dispatch({
          type: actionTypes.CREATE_FEED_TRANSACTION_HASH,
          meta: { updateHash },
        })
      })
      .on('receipt', function(receipt) {
        console.log(receipt)
        dispatch({
          type: actionTypes.CREATE_FEED_RECEIPT,
          payload: receipt,
          meta: { updateHash },
        })
      })
      .on('confirmation', function(confirmationNumber, receipt) {
        console.log(confirmationNumber)
      })
  }
}
