/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package faucets

import (
	"context"
	"crypto/ecdsa"
	"fmt"
	"github.com/MikaelLazarev/erascan/server/services/errors"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"log"
	"math/big"
)

func (s *service) FulFill(address string) error {

	fmt.Println(address)
	if s.store.IsFullfilledLast24H(address) {
		return errors.ErrorCantFulFill
	}

	publicKey := s.privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		log.Fatal("error casting public key to ECDSA")
	}

	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)
	nonce, err := s.client.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		log.Fatal(err)
	}

	gasPrice, err := s.client.SuggestGasPrice(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	auth := bind.NewKeyedTransactor(s.privateKey)
	auth.Nonce = big.NewInt(int64(nonce))
	auth.Value = big.NewInt(0)      // in wei
	auth.GasLimit = uint64(5000000) // in units
	auth.GasPrice = gasPrice

	contractAddress := common.HexToAddress("0x1A758E75d1082BAab0A934AFC7ED27Dbf6282373")
	instance, err := NewFaucets(contractAddress, s.client)
	if err != nil {
		log.Fatal(err)
	}

	recepientAddress := common.HexToAddress(address)
	tx, err := instance.MintMockTokens(auth, recepientAddress, big.NewInt(1000000000000000000))
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("tx sent: %s", tx.Hash().Hex())

	s.store.AddToList(address)

	return nil
}
