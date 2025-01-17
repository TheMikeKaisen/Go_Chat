package main

import (
	"log"

	"github.com/TheMikeKaisen/Go_Chat/db"
)

func main() {
	_, err := db.NewDatabase()
	if err != nil {
		log.Fatalf("Cannot connect to the database: %v", err)
	}
}
