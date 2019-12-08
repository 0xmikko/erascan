/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap"

const ButtonLink = ({to, title}) => to.startsWith('http') ? <a href={to}> <Button size={"sm"} style={{marginRight: 10}}>{title}</Button></a> :
                              <Link to={to}>
                                <Button size={"sm"} style={{marginRight: 10}}>{title}</Button>
                              </Link>;

export default ButtonLink;
