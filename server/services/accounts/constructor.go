/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package accounts

import (
	"github.com/MikaelLazarev/erascan/server/core"
)

type service struct {
	store core.AccountsStore
}

func New(accountStore core.AccountsStore) core.AccountsService {

	cs := &service{accountStore}
	return cs
}
