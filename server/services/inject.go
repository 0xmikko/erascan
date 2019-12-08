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
	"github.com/MikaelLazarev/erascan/server/services/notifications"
	"github.com/MikaelLazarev/erascan/server/services/transactions"
	"github.com/MikaelLazarev/erascan/server/services/users"
	"github.com/MikaelLazarev/erascan/server/store"
)

type Services struct {
	TransactionsService core.TransactionsService
	AccountsService     core.AccountsService
	NotificationService core.NotificationService
	UserService         core.UserService
}

func InjectServices(Store store.GlobalStore) *Services {

	notificationService := notifications.New(Store.NotificationStore)
	transactionsService := transactions.New(Store.TransactionsStore, notificationService)
	accountsService := accounts.New(Store.AccountStore, transactionsService)

	return &Services{
		AccountsService:     accountsService,
		TransactionsService: transactionsService,
		NotificationService: notificationService,
		UserService:         users.New(Store.UserStore, accountsService, transactionsService),
	}
}
