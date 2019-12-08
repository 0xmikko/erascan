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

func (s *service) ListByUser(ctx context.Context, userID core.ID) (result []*core.Account, err error) {

	accounts, err := s.store.ListByUser(ctx, userID)
	if err != nil {
		return nil, err
	}

	return accounts, nil
}
