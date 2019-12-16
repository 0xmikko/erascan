/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Button, Form } from 'react-bootstrap'

import InputField from './InputField'
import SelectField from './SelectField'

const renderField = (field, values, errors) => {
  const inputProps = {
    name: field.field,
    type: field.type || 'text',
    title: field.name,
    sm: field.sm || 12,
    editable: field.editable,
    key: field.field,
    values,
    errors,
  }

  switch (field.type) {
    default:
    case 'text':
    case 'password':
    case 'Address':
      return <InputField {...inputProps} />

    case 'select':
      return <SelectField {...inputProps} />

    case 'textarea':
      return <InputField {...inputProps} as={'textarea'} />

    // case 'checkbox':
    //   return <CheckBoxField {...inputProps} />
  }
}

export default (fieldList, submitLabel, submitDisabled) => {
  return ({ handleSubmit, values, errors }) => {
    const fields = fieldList.map(f => renderField(f, values, errors))

    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>{fields}</Form.Row>
        <Button type="submit" disabled={submitDisabled}>
          {submitLabel || 'Save'}
        </Button>
      </Form>
    )
  }
}
