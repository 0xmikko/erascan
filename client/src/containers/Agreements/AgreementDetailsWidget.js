/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import DetailsWidget from '../../components/Widgets/DetailsWidget'
import { fields, itemName } from "../Agreements/Entity";

export default ({ id }) => (
  <DetailsWidget id={id} fields={fields} itemName={itemName} />
)
