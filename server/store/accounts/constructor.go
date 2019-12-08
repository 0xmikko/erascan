/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package accounts

import (
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/jinzhu/gorm"
)

const table = "accounts"

type store struct {
	DB  *gorm.DB
	Table string
}

// NewStore - creates New store
func New(dbase *gorm.DB) core.AccountsStore {

	// Migrate model
	return &store{dbase, table}
}
