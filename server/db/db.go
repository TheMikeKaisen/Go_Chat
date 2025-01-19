package db

import (
	"database/sql"

	_ "github.com/lib/pq"
)

type Database struct {
	db *sql.DB // db starts with small letter. which in go means that is is private -> cannot be accessed out of the package.
}

// create database connection
func NewDatabase() (*Database, error) {
	db, err := sql.Open("postgres", "postgres://root:password@localhost:5433/go-chat?sslmode=disable")
	if err != nil {
		return nil, err
	}
	
	return &Database{db: db}, nil
}

func (d *Database) Close() {
	d.db.Close()
}

func (d *Database) GetDB() *sql.DB {
	return d.db
}
