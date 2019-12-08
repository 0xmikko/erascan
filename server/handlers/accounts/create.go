/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package accounts

import (
	"context"
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)



func CreateHandler(c *gin.Context) {

	var accountDTO core.AccountCreateDTO

	err := c.BindJSON(&accountDTO)
	if err != nil {
		log.Println(err)
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Wrong parameter"})
		return
	}

	err = accountService.Create(context.TODO(), &accountDTO)
	if err != nil {
		log.Println(err)
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": true})

}
