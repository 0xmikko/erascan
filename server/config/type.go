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

func GetConfigType() int {
	configEnv := os.Getenv("ENV")

	switch configEnv {
	case "TEST":
		return TEST

	case "PROD":
		return PROD

	}
	return DEV
}
