/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import * as moment from 'moment'

export const fromNow = timeStamp =>
  moment(1000 * parseInt(timeStamp)).fromNow()

export const humanDate = timeStamp =>
    moment(1000 * parseInt(timeStamp)).format()
