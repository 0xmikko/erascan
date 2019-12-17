/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import ipfsClient from 'ipfs-http-client'
import * as actionTypes from './actionTypes'
import FeedFactory from '../../contracts/Feed_Factory'
import { FEED_FACTORY_RINKEBY_ADDRESS } from '../../config'
import { abiEncodeWithSelector } from '../../utils/ethUtils'

export const createFeed = (feedCreateData, updateHash) => {
  // Getting data from feedCreate Data
  const { creator, operator, metadata, message } = feedCreateData

  console.log('UHASH', updateHash)

  return async (dispatch, getState) => {

    // Get web3 instance
    const { web3 } = getState().web3

    // Dispatch Loading event
    dispatch({ type: actionTypes.CREATE_FEED_REQUEST, meta: { updateHash } })

    const ipfs  = await ipfsClient({ host: 'ipfs.infura.io', port: '5001',  protocol: 'https' })


    console.log('IPFS node is ready', ipfs)
    const content = ipfsClient.Buffer.from(message)
    const results = await ipfs.add(content)
    const proofHash = results[0].hash // "Qm...WW"
    console.log(proofHash)
    // proofHash:
    //     '0x2a1acd26847576a128e3dba3aa984feafffdf81f7c7b23bdf51e7bec1c15944c',
    // // Get feed instance for Rinkeby deployed contract
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
