/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package accounts

import (
	"github.com/MikaelLazarev/erascan/server/core"
	"go.mongodb.org/mongo-driver/mongo"
)

const collection = "accounts"

type store struct {
	DB  *mongo.Database
	Col *mongo.Collection
}

// NewStore - creates New store
func New(dbase *mongo.Database) core.AccountsStore {

	// Migrate model
	return &store{dbase, dbase.Collection(collection)}
}
