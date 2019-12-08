/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package accounts

import (
	"context"
	"github.com/MikaelLazarev/cerberus/server/core"
	"github.com/MikaelLazarev/cerberus/server/store/helpers"
)

func (s *store) Insert(ctx context.Context, account *core.Account) (AccountID core.ID, err error) {
	account.ID = core.ID(account.Address)

	result, err := s.Col.InsertOne(context.Background(), account)
	_, err = helpers.ConvertOIDToString(result.InsertedID)

	return account.ID, err
}
