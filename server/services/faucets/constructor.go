/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package faucets

import (
	"crypto/ecdsa"
	"github.com/MikaelLazarev/erascan/server/config"
	"github.com/MikaelLazarev/erascan/server/core"
	"log"

	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

type service struct {
	store      core.FaucetsStore
	client     *ethclient.Client
	privateKey *ecdsa.PrivateKey
}

func New(faucetsStore core.FaucetsStore) core.FaucetService {

	client, err := ethclient.Dial("https://rinkeby.infura.io")
	if err != nil {
		log.Fatal(err)
	}

	securityConfig, err := config.GetSecurityConfig()
	if err != nil {
		log.Fatal(err)
	}

	privateKey, err := crypto.HexToECDSA(securityConfig.PrivateKey)
	if err != nil {
		log.Fatal(err)
	}

	cs := &service{faucetsStore, client, privateKey}

	return cs
}
