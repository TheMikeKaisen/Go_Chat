package main

import (
	"log"

	"github.com/TheMikeKaisen/Go_Chat/db"
	"github.com/TheMikeKaisen/Go_Chat/internal/user"
	"github.com/TheMikeKaisen/Go_Chat/router"
)

func main() {
	dbConn, err := db.NewDatabase()
	if err != nil {
		log.Fatalf("Cannot connect to the database: %v", err)
	}

	userRep := user.NewRepository(dbConn.GetDB())
	userSvc := user.NewService(userRep)
	userHandler := user.NewHandler(userSvc)

	router.InitRouter(userHandler)
	router.Start("0.0.0.0:8080")
}
