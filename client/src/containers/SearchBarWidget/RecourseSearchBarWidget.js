/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useState } from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'
import SearchBarWidget from './SearchBarWidget'

export const RecourseSearchBarWidget = ({ history }) => (
  <SearchBarWidget
    prefix={'recourse'}
    title={'Erasure agreements search'}
    history={history}
  />
)

export default RecourseSearchBarWidget
