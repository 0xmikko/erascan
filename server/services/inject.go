/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package services

import (
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/MikaelLazarev/erascan/server/services/accounts"
	"github.com/MikaelLazarev/erascan/server/services/faucets"
	"github.com/MikaelLazarev/erascan/server/store"
)

type Services struct {
	AccountsService core.AccountsService
	FaucetsService  core.FaucetService
}

func InjectServices(Store store.GlobalStore) *Services {

	accountsService := accounts.New(Store.AccountStore)
	faucetService := faucets.New(Store.FaucetsStore)

	return &Services{
		AccountsService: accountsService,
		FaucetsService:  faucetService,
	}
}
