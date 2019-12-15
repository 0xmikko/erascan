/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import * as Yup from "yup";
import Web3 from "web3";

export const isEthAddress = Yup.string()
    .test('is-eth-address', '${path} is incorrect eth address', value =>
        Web3.utils.isAddress(value)
    )
    .required('Required')
