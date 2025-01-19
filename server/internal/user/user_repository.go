package user

import (
	"context"
	"database/sql"
	"log"
)

// these function come with the database connection. So we dont have to explicitly write it.
type DBTX interface {
	ExecContext(ctx context.Context, query string, args ...interface{}) (sql.Result, error)
	PrepareContext(context.Context, string) (*sql.Stmt, error)
	QueryContext(context.Context, string, ...interface{}) (*sql.Rows, error)
	QueryRowContext(context.Context, string, ...interface{}) *sql.Row
}

type repository struct {
	db DBTX
}

func NewRepository(db DBTX) Repository {
	// implementing repository interface
	// we implement the method "CreateUser" from the interface as struct method down below
	return &repository{db: db}
}

func (r *repository) CreateUser(ctx context.Context, user *User) (*User, error) {

	log.Print("reached repository!")
	log.Print("User: ", user)

	// to store latest inserted id
	var latestInsertedId int

	// postgres query to insert a user and return the inserted id
	query := "INSERT INTO users(username, email, password) VALUES($1, $2, $3) returning id"

	// db connection variable provides QueryRowContext function
	err := r.db.QueryRowContext(ctx, query, user.Username, user.Email, user.Password).Scan(&latestInsertedId)
	if err != nil {
		return &User{}, nil
	}
	// DEBUG
	log.Print(latestInsertedId)

	user.ID = int64(latestInsertedId)
	// debug
	log.Print(user.ID)

	return user, nil
}
