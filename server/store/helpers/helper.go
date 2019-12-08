/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

package helpers

import (
	"errors"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func ConvertOIDToString(OID interface{}) (string, error) {
	if oid, ok := OID.(primitive.ObjectID); ok {
		return oid.Hex(), nil
	}
	return "", errors.New("Error converting Mongo OID into string")
}
