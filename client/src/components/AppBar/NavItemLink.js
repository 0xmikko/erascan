/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
import React from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default ({to, label}) => (
    <Nav.Item bsPrefix={'nav-link'}>
        <Link to={to}>{label}</Link>
    </Nav.Item>
)

