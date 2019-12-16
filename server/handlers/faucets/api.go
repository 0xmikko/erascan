/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package faucets

import (
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/gin-gonic/gin"
)

var faucetService core.FaucetService

func RegisterController(r gin.IRouter, fs core.FaucetService) {

	faucetService = fs

	c := r.Group("/faucet/")
	c.GET("/:id/", FulFillHandler)

}
