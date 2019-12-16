/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package faucets

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func FulFillHandler(c *gin.Context) {

	accountID, ok := c.Params.Get("id")
	if !ok {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Wrong parameter"})
		return
	}

	tx, err := faucetService.FulFill(accountID)
	if err != nil {
		log.Println(err)
		c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"tx": tx})

}
