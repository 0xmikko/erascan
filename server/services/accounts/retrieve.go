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
)

func (s *service) Retrieve(ctx context.Context, userID, accountID core.ID) (*core.Account, error) {

	account, err := s.store.FindByID(ctx, accountID)
	if err != nil {
		return nil, err
	}

	return account, nil

}
