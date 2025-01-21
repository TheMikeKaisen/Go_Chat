# Go-Chat Application

A real-time chat application built with **Golang** for the backend and **Next.js** for the frontend. This project demonstrates a complete implementation of WebSocket-based communication and user authentication.

---

## Features

### Backend:

- Built using **Golang**.
- **PostgreSQL** as the database.
- WebSocket integration with **Gorilla/WebSocket**.
- User authentication using **JWT (JSON Web Tokens)**.
- Database migrations with **migrate**.
- CORS support for cross-origin requests.

### Frontend:

- Built with **Next.js**.
- Real-time messaging using WebSockets.
- Styled with **Tailwind CSS**.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Docker
- Go (Golang)
- Node.js and npm

---

## Backend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TheMikeKaisen/Go_Chat.git
cd Go-Chat/server

```

### 2. Install Dependencies

```bash
go mod tidy

```

### 3. Setup PostgreSQL Database

- Run the following commands to set up the PostgreSQL database in a Docker container:

### Initialize the PostgreSQL container

```bash
make postgresinit

```

### Create a new database

```bash
make createdb

```

### Run database migrations

```bash
make migrateup

```

---

### 4. Run the Backend Server

```bash
go run main.go

```

The backend server will run on `http://localhost:8080`.

5. **Create a user using Postman:**
    
    Since login functionality requires an existing user, follow these steps to create a user:
    
    - **Endpoint:** `POST /signup`
    - **Body:**
        
        ```json
        {
          "username": "testuser",
          "email": "testuser@example.com",
          "password": "password123"
        }
        
        ```
        
    - **Response:**
        
        ```json
        {
          "id": 1,
          "username": "testuser",
          "email": "testuser@example.com"
        }
        
        ```

---

## Frontend Setup

### 1. Navigate to the Client Folder

```bash
cd ../client

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Run the Development Server

```bash
npm run dev

```

The frontend server will run on `http://localhost:3000`.

---

---

## Technologies Used

### Backend:

- [Gin](https://github.com/gin-gonic/gin): HTTP web framework.
- [Gorilla/WebSocket](https://github.com/gorilla/websocket): WebSocket library.
- [JWT](https://github.com/golang-jwt/jwt): Token-based authentication.
- [lib/pq](https://github.com/lib/pq): PostgreSQL driver for Go.
- [migrate](https://github.com/golang-migrate/migrate): Database migration tool.

### Frontend:

- [Next.js](https://nextjs.org/): React framework for server-rendered apps.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [uuid](https://github.com/uuidjs/uuid): For generating unique IDs.

---

## Makefile Commands

| Command | Description |
| --- | --- |
| `postgresinit` | Initialize a PostgreSQL Docker container. |
| `postgres` | Open PostgreSQL in execution mode. |
| `createdb` | Create a new database named `go-chat`. |
| `dropdb` | Drop the existing `go-chat` database. |
| `migrateup` | Apply all database migrations. |
| `migratedown` | Rollback all database migrations. |

---