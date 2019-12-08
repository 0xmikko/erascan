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

// FindByIDWithMembers - finds account by its Address
func (s *store) FindByID(ctx context.Context, accountID core.ID) (*core.Account, error) {
	var foundAccount core.Account

	db := s.DB.First(&foundAccount, accountID)
	if db.Error != nil {
		return nil, db.Error
	}

	return &foundAccount, nil
}
