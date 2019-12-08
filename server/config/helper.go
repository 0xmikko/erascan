/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */
package config

import (
	"encoding/json"
	"io/ioutil"
)

// Gets config from file
func LoadConfigFromJSON(filefname string, targetStruct interface{}) error {

	rawData, err := ioutil.ReadFile(filefname)
	if err != nil {
		return err
	}

	err = json.Unmarshal(rawData, targetStruct)
	return err
}
