/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import FormikForm from '../../components/Forms/FormikForm'
import { fields, itemName } from './Entity'
import * as actions from '../../store/actions'
import * as reducers from '../../store/reducers'
import * as statuses from '../../store/utils/status'

const FeedCreateWidget = ({ accounts, createFeed, transactionUpdates }) => {
  const [updateHash, setUpdateHash] = useState(undefined)
  const [transactionSubmitted, setTransactionSubmitted] = useState(false)

  if (updateHash && transactionUpdates[updateHash]) {
    switch (transactionUpdates[updateHash].status) {
      case statuses.STATUS_FAILURE:
        return "Error"
      case statuses.STATUS_SUCCESS:
        alert("Your feed transaction was submitted.")
    }
  }

  const onSubmit = values => {
    console.log(values)
    // Disable Submit button
    setTransactionSubmitted(true)

    // Create feed create structure
    const feedCreateData = {
      creator: accounts[0],
      operator: values.operator,
      proofHash:
        '0x2a1acd26847576a128e3dba3aa984feafffdf81f7c7b23bdf51e7bec1c15944c',
      metadata: values.metadata || '0x0',
    }

    // Generate unique transcaction update ticket to follow events
    const trUpdate = Date.now() + feedCreateData.proofHash.toString()

    setUpdateHash(trUpdate)

    // Create feed
    createFeed(feedCreateData, trUpdate)
  }
  const backLink = '/agreements/submitted/'

  console.log(accounts)

  return (
    <FormikForm
      fieldList={fields}
      onSubmit={onSubmit}
      onSuccessLink={backLink}
      initialValues={{ creator: accounts[0], operator: accounts[0] }}
      submitLabel={'Deploy Feed'}
      submitDisabled={transactionSubmitted}
    />
  )
}

const mapStateToProps = state => ({
  accounts: reducers.accounts(state),
  transactionUpdates: reducers.transactionUpdates(state),
})

const mapDispatchToProps = dispatch => ({
  createFeed: (feedCreateData, updateHash) =>
    dispatch(actions.createFeed(feedCreateData, updateHash)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedCreateWidget)
