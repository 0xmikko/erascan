/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package faucets

import (
	"fmt"
	"github.com/MikaelLazarev/erascan/server/services/errors"
)

func (s *service) FulFill(address string) error {

	fmt.Println(address)
	if s.store.IsFullfilledLast24H(address) {
		return errors.ErrorCantFulFill
	}

	s.store.AddToList(address)



	return nil
}
