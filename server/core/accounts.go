/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package core

import (
	"context"
	"github.com/jinzhu/gorm"
)

type (
	Account struct {
		Address ID     `gorm:"unique;not null" json:"id"`
		Name    string `json:"owner"`
		gorm.Model
	}

	AccountCreateDTO struct {
		Address string `json:"account"`
		Name    string `json:"name"`
	}

	AccountsStore interface {
		// Stores account obj and return account Address
		Insert(ctx context.Context, account *Account) error
		FindByID(ctx context.Context, accountID ID) (*Account, error)
	}

	AccountsService interface {
		Create(ctx context.Context, dto *AccountCreateDTO) error
		Retrieve(ctx context.Context, address ID) (*Account, error)
	}
)
