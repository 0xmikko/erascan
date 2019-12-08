/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, {Component} from "react";


const TableSubHeader = (props) => (

    <tr>
        <td colSpan={props.colSpan}n align={props.align}>
            <strong>
                <h4>{props.header}</h4>
            </strong>
        </td>
    </tr>
);

export default TableSubHeader
