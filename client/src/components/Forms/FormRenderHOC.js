/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Button, Form } from 'react-bootstrap'

import { Formik } from 'formik/dist/index'
import * as yup from 'yup'

// import { getHashUpdates } from "../../reducers";
import * as actions from '../../store/actions'
import * as statuses from '../../store/utils/status'

import AutoCompleteField from './AutoCompleteField'
import InputField from './InputField'
import CheckBoxField from './CheckBoxField'
import SelectField from './SelectField'

const renderField = (field, values, errors) => {
  const inputProps = {
    name: field.field,
    type: field.type || 'text',
    title: field.name,
    sm: field.sm || 12,
    key: field.field,
    values,
    errors
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

    case 'autocomplete':
      return <AutoCompleteField {...inputProps} />

    case 'checkbox':
      return <CheckBoxField {...inputProps} />
  }
}

export default fieldList => {
  return ({ handleSubmit, values, errors }) => {
    const fields = fieldList.map(f => renderField(f, values, errors))

    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>{fields}</Form.Row>
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}
