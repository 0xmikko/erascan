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

func (s *service) Create(ctx context.Context, userID core.ID, account string) error {

	_, err := s.store.Insert(ctx, &core.Account{
		ID:      core.ID(account),
		Address: account,
		Owner:   userID,
	})

	go monitor(account, s.store, s.transactionsService)

	return err

}
