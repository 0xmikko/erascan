/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package accounts

import (
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/gin-gonic/gin"
)

var accountService core.AccountsService

func RegisterController(r gin.IRouter, as core.AccountsService) {

	accountService = as

	c := r.Group("/accounts/")
	c.GET("/", ListHandler)
	c.GET("/:id/", RetrieveHandler)
	c.POST("/", CreateHandler)

}
