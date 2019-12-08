/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package accounts

import (
	"context"
	"github.com/MikaelLazarev/erascan/server/core"
)

func (s *store) Insert(ctx context.Context, account *core.Account) error {

	db := s.DB.Create(account)

	return db.Error
}
