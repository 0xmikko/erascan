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

func (s *service) Create(ctx context.Context, dto *core.AccountCreateDTO) error {

	err := s.store.Insert(ctx, &core.Account{
		Address: core.ID(dto.Address),
		Name:    dto.Name,
	})

	return err

}
