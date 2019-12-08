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
	"github.com/MikaelLazarev/erascan/server/store"
)

type Services struct {
	AccountsService     core.AccountsService

}

func InjectServices(Store store.GlobalStore) *Services {


	accountsService := accounts.New(Store.AccountStore)

	return &Services{
		AccountsService:     accountsService,

	}
}
