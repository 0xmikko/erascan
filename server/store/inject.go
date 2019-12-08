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
	"go.mongodb.org/mongo-driver/mongo"
)

// GlobalStore contains all repository objects for injecting
type GlobalStore struct {
	AccountStore      core.AccountsStore
	TransactionsStore core.TransactionsStore
	NotificationStore core.NotificationStore
	UserStore         core.UserStore
}

func InjectStore(db *mongo.Database) *GlobalStore {
	return &GlobalStore{
		accounts.New(db),
		transactions.New(db),
		notifications.New(db),
		users.New(db),
	}

}
