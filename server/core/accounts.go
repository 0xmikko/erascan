/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package core

import "context"

type (
	Account struct {
		ID      ID     `json:"id"`
		Address string `json:"address"`
		Owner   string `json:"owner"`
	}

	AccountsStore interface {
		// Stores account obj and return account ID
		Insert(ctx context.Context, account *Account) (accountID ID, err error)

		FindByID(ctx context.Context, accountID ID) (*Account, error)
	}

	AccountsService interface {
		Create(ctx context.Context, address, account string) error
		Retrieve(ctx context.Context, address ID) (*Account, error)
	}
)
