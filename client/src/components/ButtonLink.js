/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Button2 = ({ title }) => (
  <Button
    size={'sm'}
    style={{
      marginRight: 10,
      backgroundColor: '#43cd30',
      borderColor: '#43cd30',
      color: '#FFF',
    }}
  >
    {title}
  </Button>
)

const ButtonLink = ({ to, title }) =>
  to.startsWith('http') ? (
    <a href={to}>
      {' '}
      <Button2 title={title} />
    </a>
  ) : (
    <Link to={to}>
      <Button2 title={title} />
    </Link>
  )

export default ButtonLink
