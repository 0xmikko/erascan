/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as moment from 'moment'
import AddressLink from "../Address/AddressLink";

export default ({ data: { feeds } }) => (
    <Table style={{ margin: 0 }}>
        <tbody>
        {feeds.map(e => (
            <tr key={e.id}>
                <td width={'50%'}>
                    <Link to={'/post/' + e.id}>
                        <div style={{ fontSize: '14px' }}>{e.id.substr(0, 20)}...</div>
                    </Link>
                    <div
                        style={{
                            fontSize: '11px',
                            color: '#A808A96',
                        }}
                    >
                        {moment(1000 * parseInt(e.createdTimestamp)).fromNow()}
                    </div>
                </td>
                <td align={'right'}>
                    <AddressLink id={e.creator} prefix={'Author'} />

                    <div style={{ fontSize: '14px' }}>
                        Author <a href={''}>{e.creator.substr(0, 20)}...</a>
                    </div>
                    <div style={{ fontSize: '14px' }}>
                        Feed <a href={''}>{e.creator.substr(0, 20)}...</a>
                    </div>
                </td>
            </tr>
        ))}
        </tbody>
    </Table>
)
