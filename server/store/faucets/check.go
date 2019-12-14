/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package faucets


func (s *store) IsFullfilledLast24H (address string) bool{
	_, found := s.C.Get(address)
	return found
}
