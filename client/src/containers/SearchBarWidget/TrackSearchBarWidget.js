/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import {
  Col,
  Card,
  Form,
  FormControl,
  InputGroup,
  Button,
} from 'react-bootstrap'
import ButtonLink from '../../components/ButtonLink'
import SearchBarWidget from './SearchBarWidget'

export const TrackSearchBarWidget = ({ history }) => (
  <SearchBarWidget
    prefix={'track'}
    title={'Erasure track record search'}
    history={history}
  />
)

export default TrackSearchBarWidget
