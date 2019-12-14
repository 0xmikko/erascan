/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package errors

import "errors"

var (
	ErrorCantFulFill			= errors.New("You can fulfill your address only once per 24h")
	ErrorDBError                = errors.New("Database error")
	ErrorHaveNoRights           = errors.New("You have no rights for this operation")
)
