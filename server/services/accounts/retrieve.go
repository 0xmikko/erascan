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

func (s *service) Retrieve(ctx context.Context, ID core.ID) (*core.Account, error) {

	account, err := s.store.FindByID(ctx, ID)
	if err != nil {
		return nil, err
	}

	return account, nil

}

