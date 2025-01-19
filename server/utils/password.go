package utils

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)



func HashPassword(password string) (string, error) {

	// create a hash
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("error while hashing password: %v", err)
	}

	return string(hashedPassword), nil
}

func CheckPassword(password string, hashedPassword string) (error) {

	// compare a hash
	return bcrypt.CompareHashAndPassword([]byte(password), []byte(hashedPassword))
}