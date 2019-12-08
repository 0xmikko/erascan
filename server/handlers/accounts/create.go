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

type CreateAccountDTO struct {
	Account string `json:"account"`
}

func CreateHandler(c *gin.Context) {

	var accountDTO CreateAccountDTO

	userID := c.MustGet("userId").(core.ID)
	err := c.BindJSON(&accountDTO)
	if err != nil {
		log.Println(err)
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Wrong parameter"})
		return
	}

	err = accountService.Create(context.TODO(), userID, accountDTO.Account)
	if err != nil {
		log.Println(err)
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	accountsList, err := accountService.ListByUser(context.TODO(), userID)
	if err != nil {
		log.Println(err)
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": accountsList})

}
