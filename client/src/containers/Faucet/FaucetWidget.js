/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, Form, InputGroup, Button, Spinner } from 'react-bootstrap'
import Web3 from 'web3'
import * as reducers from '../../store/reducers'
import * as actions from '../../store/actions'
import * as status from '../../store/utils/status'
import { fr } from 'ethers/wordlists'

export const FaucetWidget = ({ giveNMR, faucet }) => {
  const [addressValid, setAddressValid] = useState(false)
  const [value, setValue] = useState('')

  const onChange = e => {
    e.preventDefault()
    const value = e.target.value
    setValue(value)
    setAddressValid(Web3.utils.isAddress(value))
  }

  const  onSubmit = e => {
    e.preventDefault()
    console.log('Hi - Hi')
    giveNMR(value)
  }

  const isLoading = faucet.status === status.STATUS_LOADING

  const buttonText = isLoading ? (
    <>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Sending
    </>
  ) : (
    'Send me NMR'
  )

  let feedbackText, feedbackColor

  switch (faucet.status) {
    default:
    case status.STATUS_UPDATE_NEEDED:
    case status.STATUS_LOADING:
      feedbackText = ''
      break

    case status.STATUS_SUCCESS:
      feedbackText = "Success! You'll get your NMR soon"
      feedbackColor = '#00AA00'
      break
    case status.STATUS_FAILURE:
      feedbackText = faucet.error
      feedbackColor = '#AA0000'
      break
  }

  return (
    <Card>
      <Card.Body style={{ backgroundColor: '#FFFFFF' }}>
        <h4>Enter your testnet account address</h4>
        <Form onSubmit={onSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your testnet account address "
              onChange={onChange}
            />

            <InputGroup.Append>
              <Button
                variant="primary"
                type="submit"
                disabled={!addressValid || isLoading}
              >
                {buttonText}
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <p style={{ color: feedbackColor, marginBottom: 0 }}>{feedbackText}</p>
        </Form>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = state => ({
  faucet: reducers.faucet(state),
})

const mapDispatchToProps = dispatch => ({
  giveNMR: address => dispatch(actions.giveNMR(address)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FaucetWidget)
