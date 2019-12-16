/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package store

import (
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/MikaelLazarev/erascan/server/store/accounts"
	"github.com/MikaelLazarev/erascan/server/store/faucets"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

// GlobalStore contains all repository objects for injecting
type GlobalStore struct {
	AccountStore core.AccountsStore
	FaucetsStore core.FaucetsStore
}

func InjectStore(db *gorm.DB) *GlobalStore {
	return &GlobalStore{
		accounts.New(db),
		faucets.New(),
	}

}
