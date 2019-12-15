/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import * as reducers from '../store/reducers'


import NoWeb3FoundScreen from '../screens/NoWeb3FoundScreen'

export function Web3Wrapper({getWeb3, Web3, children}) {

    useEffect(() => {
        if (!Web3) {
            getWeb3()
        }
    }, [Web3, getWeb3])

    if (!Web3) {
        return <NoWeb3FoundScreen />
    }
    return children
}

const mapStateToProps = state => ({
    Web3: reducers.Web3(state),
})

const mapDispatchToProps = dispatch => ({
    getWeb3: () => dispatch(actions.getWeb3()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Web3Wrapper)
