package ws

import (
	"github.com/gorilla/websocket"
)

type Client struct {
	Conn    *websocket.Conn // represents a connection
	Message chan *Message
}

// a message would look like this
type Message struct {
	Content  string `json:"content"`
	RoomID   string `json:"roomId"`
	Username string `json:"username"`
}
