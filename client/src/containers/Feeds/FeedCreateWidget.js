/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import FormikForm from '../../components/Forms/FormikForm'
import { fields, itemName } from "./Entity";


export default props => {
  const onSubmit = () => {
    console.log('Submitted')
  }
  const backLink = '/agreements/submitted/'

  return (
    <FormikForm
      fieldList={fields}
      onSubmit={onSubmit}
      onSuccessLink={backLink}
      {...props}
    />
  )
}
