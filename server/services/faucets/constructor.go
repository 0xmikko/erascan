/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package faucets

import (
	"github.com/MikaelLazarev/erascan/server/core"
)

type service struct {
	store core.FaucetsStore
}

func New(faucetsStore core.FaucetsStore) core.FaucetService{

	cs := &service{faucetsStore}
	return cs
}
