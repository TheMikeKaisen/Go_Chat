
# initialize the postgres image in docker
postgresinit:
	docker run --name postgres15 -p 5433:5432 -d -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password postgres:15-alpine

# open postgres in execution mode
postgres:
	docket exec -it postgres15 psql

# create a new db
createdb:
	docker exec -it postgres15 createdb --username=root --owner=root go-chat

# drop database
dropdb:
	docker exec -it postgres15 dropdb go-chat

migrateup:
	migrate -path db/migrations/ -database "postgres://root:password@localhost:5433/go-chat?sslmode=disable" -verbose up

migratedown:
	migrate -path db/migrations/ -database "postgres://root:password@localhost:5433/go-chat?sslmode=disable" -verbose down

# by default makefile searches for the file when you write: make <filename> 
# here we are explicitly telling the makefile that postgresinit is not a file, so if a file do exists by the name postgresinit, it would still run the command and not the file.


.PHONY: postgresinit postgres createdb dropdb migrateup migratedown