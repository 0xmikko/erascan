/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import getWeb3util from '../utils/getweb3'
import * as actionTypes from './actionTypes'
import ErasureContract from '../../contracts/Erasure_Posts.json'

export const getWeb3 = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.WEB3_REQUEST })

    const web3 = await getWeb3util()
    const accounts = await web3.eth.getAccounts()
    const gasPrice = await web3.eth.getGasPrice()
    const network = await web3.eth.net.getId()

    // Rinkeby network ID is 4
    if (network !== 4) {
      return dispatch({
        type: actionTypes.WEB3_FAILURE,
        error: "Wrong network",
      })
    }

    dispatch({
      type: actionTypes.WEB3_SUCCESS,
      payload: { web3, accounts, gasPrice },
    })
  }
}
//
// export const depositMoney = (contractAddress, from, amount) => {
//   console.log(contractAddress, amount)
//   return async (dispatch, getState) => {
//     dispatch({ type: actionTypes.PAYMENT_REQUEST })
//     console.log('Deposit money ', contractAddress, amount)
//     const web3 = getState().web3.web3
//
//     const result = web3.eth.sendTransaction({
//       from: from,
//       to: contractAddress,
//       value: amount,
//     })
//     dispatch({ type: actionTypes.PAYMENT_SUCCESS })
//     console.log(result)
//   }
// }
//
// export const sendMoney = (contractAddress, from, to, amount) => {
//   console.log(contractAddress, from, to, amount)
//   return async (dispatch, getState) => {
//     console.log('Send money ', contractAddress, to, amount)
//     const web3 = getState().web3.web3
//     dispatch({ type: actionTypes.PAYMENT_REQUEST })
//     const contract = new web3.eth.Contract(ErasureContract.abi, contractAddress)
//     const result = await contract.methods.sendMoney(to, amount).send({ from })
//     dispatch({ type: actionTypes.PAYMENT_SUCCESS })
//   }
// }

export const depositLinks = (contract, amount) => {}
