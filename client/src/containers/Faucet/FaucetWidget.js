/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, {useState} from 'react'
import {
  Col,
  Card,
  Form,
  FormControl,
  InputGroup,
  Button,
} from 'react-bootstrap'
import Web3 from "web3";

export const FaucetWidget = ({}) => {

  const [addressValid, setAddressValid] = useState(false);
  const [value, setValue] = useState("");

  const onChange = e => {
    e.preventDefault()
    const value = e.target.value
    setValue(value)
    setAddressValid(Web3.utils.isAddress(value))
  }

  const onPress = () => {

  }

  return (
    <Card>
      <Card.Body style={{ backgroundColor: '#FFFFFF' }}>
        <h4>Enter your testnet account address</h4>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your testnet account address "
            onChange={e => onChange(e)}
          />
          <InputGroup.Append>
            <Button variant="primary" disabled={!addressValid}>Send me NMR</Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  )
}

export default FaucetWidget
