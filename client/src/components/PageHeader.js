/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { Component } from 'react'
import { Container, Media, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFullAPIAddress } from '../store/utils/api'
import { Helmet } from 'react-helmet'

export const PageHeader = ({
    icon,
    back,
    searchBar,
    header,
    subHeader,
    resource,
    add,
}) => {
    let image = ''
    if (icon) {
        image = (
            <a href={getFullAPIAddress('/images/' + icon + '/edit/')}>
                <img src={icon} height={80} style={{ marginRight: 20 }} />
            </a>
        )
    }

    if (back) {
        image = <Link to={back}>Back</Link>
    }

    if (typeof header !== 'string') {
        header = header === '' ? 'DBS Lifestyle' : header.toString()
    }

    let addComponent
    if (add) {
        addComponent = <Link to={'/' + resource + '/new/edit'}>+</Link>
    }

    return (
        <>
            <Helmet>
                <title>{header}</title>
            </Helmet>
            <Container
                fluid
                style={{
                    backgroundColor: '#FAFBFC',
                    paddingTop: 15,
                    paddingLeft: 40,
                    paddingRight: 40,
                    paddingBottom: 15,
                }}
            >
                <Media>
                    {image}

                    <Media.Body>
                        <Row>
                            <Col sm={8}>
                                <h3>
                                    {header} {addComponent}
                                </h3>
                                <p>{subHeader} </p>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>
                    </Media.Body>
                </Media>
            </Container>
        </>
    )
}

export default PageHeader
