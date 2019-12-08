/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package main

import (
	"context"
	"github.com/MikaelLazarev/erascan/server/config"
	"github.com/MikaelLazarev/erascan/server/handlers"
	"github.com/MikaelLazarev/erascan/server/services"
	"github.com/MikaelLazarev/erascan/server/store"
	"github.com/MikaelLazarev/erascan/server/store/helpers"
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

	// Connecting Mongo DB and defer disconnecting
	mongoDB := helpers.Connect(dbConfig.String(), dbConfig.DBname)
	defer mongoDB.Client.Disconnect(context.Background())

	db, err := gorm.Open("postgres", "host=myhost port=myport user=gorm dbname=gorm password=mypassword")
	defer db.Close()

	// Inject store
	store := store.InjectStore(mongoDB.DB)

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
