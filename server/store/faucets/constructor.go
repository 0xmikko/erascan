/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package faucets

import (
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/patrickmn/go-cache"
	"time"
)

type store struct {
	C *cache.Cache
}

var repeatFaucetAllowedInterval = 24 * time.Hour

// NewStore - creates New store
func New() core.FaucetsStore {
	c := cache.New(repeatFaucetAllowedInterval, repeatFaucetAllowedInterval)
	// Migrate model
	return &store{c}
}
