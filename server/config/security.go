/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package config

import (
	"os"
)

type SecurityConfig struct {
	SigningKey string `json:"signing_key"`
	SentryDSN  string `json:"sentry_dsn"`
}

func GetSecurityConfig() (*SecurityConfig, error) {

	switch getEnv() {
	default:
		w := &SecurityConfig{}
		err := LoadConfigFromJSON("./config/dev_security.json", w)
		return w, err

	case PROD:
		signingKey := os.Getenv("SIGNING_KEY")
		sentryDSN := os.Getenv("SENTRY_DSN")
		w := &SecurityConfig{signingKey, sentryDSN}
		return w, nil

	}
}
