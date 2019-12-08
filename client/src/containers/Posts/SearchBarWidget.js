/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import {
    Col,
    Card,
    Form,
    FormControl,
    InputGroup,
    Button,
} from 'react-bootstrap'
import ButtonLink from '../../components/ButtonLink'

export const SearchBarWidget = ({ data, id, resource }) => {
    const { title, motto, description } = data
    const rightToolbar = (
        <ButtonLink to={'/' + resource + '/' + id + '/edit'} title={'Edit'} />
    )

    return (
        <Card>
            <Card.Body style={{ backgroundColor: '#FFFFFF' }}>
                <p style={{ fontSize: 14, marginBottom: 7, fontStyle: '14pt' }}>
                    <b>Erasure track+x search</b>
                </p>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Search by address / proofHash / "
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Body>
        </Card>
    )
}

export default SearchBarWidget
