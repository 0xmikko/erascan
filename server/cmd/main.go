/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package main

import (
	"github.com/MikaelLazarev/erascan/server/config"
	"github.com/MikaelLazarev/erascan/server/core"
	"github.com/MikaelLazarev/erascan/server/handlers"
	"github.com/MikaelLazarev/erascan/server/services"
	"github.com/MikaelLazarev/erascan/server/store"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"log"
	"os"
)

func main() {

	configType := config.GetConfigType()

	// Setup release mode for Gin in production
	if configType == config.PROD {
		gin.SetMode(gin.ReleaseMode)
	}

	// Getting database settings
	dbConfig, err := config.GetDBConfig(configType)
	if err != nil {
		log.Fatal("Can't get DB Settings! %s", err)
	}

	// Connecting Gorm DB and defer disconnecting

	gormDB, err := gorm.Open("postgres", dbConfig.String())
	if err != nil {
		log.Fatal("DB error connection! %s", err)
	}

	defer gormDB.Close()
	gormDB.AutoMigrate(&core.Account{})

	// Inject store
	store := store.InjectStore(gormDB)

	// Inject services
	services := services.InjectServices(*store)

	// Run server
	Port := "8080"
	if os.Getenv("PORT") != "" {
		Port = os.Getenv("PORT")
	}

	// Setup handlers
	handlers.StartServer(*services, Port)

}
