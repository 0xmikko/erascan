/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

import { Formik } from 'formik/dist/index'
import * as yup from 'yup'
import formikRenderHOC from './FormRenderHOC'
import * as statuses from '../../store/utils/status'

const FormikForm = ({ fieldList, initialValues, onSubmit }) => {
  const schemaPrep = {}
  Object.entries(fieldList).map(x => (schemaPrep[x[0]] = x[1].validation))

  const schema = yup.object({ ...schemaPrep })
  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{ ...initialValues }}
      render={formikRenderHOC(fieldList)}
    />
  )
}

FormikForm.propTypes = {
  api: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default FormikForm
