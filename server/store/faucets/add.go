/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package faucets

import "github.com/patrickmn/go-cache"

func (s *store) AddToList (address string){
	s.C.Set(address, true, cache.DefaultExpiration)
}
