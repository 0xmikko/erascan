/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package core

type (
	Faucets string

	FaucetsStore interface {
		AddToList(address string)
		IsFullfilledLast24H(address string) bool

	}

	FaucetService interface {
		SendNMR(address string) error
	}
)
