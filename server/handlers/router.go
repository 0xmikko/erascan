/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package handlers

import (
	"github.com/MikaelLazarev/erascan/server/config"
	"github.com/MikaelLazarev/erascan/server/handlers/accounts"
	"github.com/MikaelLazarev/erascan/server/services"
	"github.com/getsentry/sentry-go"
	sentrygin "github.com/getsentry/sentry-go/gin"
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"log"
	"time"
)

func StartServer(services services.Services, port string) {

	router := gin.Default()

	// CORS setup
	router.Use(cors.New(cors.Config{
		AllowAllOrigins:  true,
		AllowMethods:     []string{"POST", "GET", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Content-Type", "Content-Length", "X-CSRF-Token", "Authorization", "accept", "origin", "Cache-Control", "X-Requested-With"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// To initialize Sentry's handler, you need to initialize Sentry itself beforehand
	if config.GetConfigType() == config.PROD {
		securityConfig, err := config.GetSecurityConfig()
		if err != nil {
			log.Fatal("Can't get sentry DNS options!")
		}

		if err := sentry.Init(sentry.ClientOptions{
			Dsn: securityConfig.SentryDSN,
		}); err != nil {
			log.Fatal("Sentry initialization failed: %v\n", err)
		}

		router.Use(sentrygin.New(sentrygin.Options{}))
		log.Println("Sentry service was started")
	}

	// Api handlers. Restricted area
	apiRouter := router.Group("/api")
	accounts.RegisterController(apiRouter, services.AccountsService)

	// Temporary added to serve landing page

	staticPath := "../client/build"
	if config.GetConfigType() == config.PROD {
		staticPath = "/app/client/build"
	}

	router.Use(static.Serve("/", static.LocalFile(staticPath, false)))
	router.NoRoute(func(c *gin.Context) {
		c.File(staticPath + "/index.html")
	})

	log.Println("Starting service at :" + port)
	err := router.Run(":" + port)
	if err != nil {
		log.Fatal(err)
		return
	}

}
