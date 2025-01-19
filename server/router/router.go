package router

import (
	"github.com/TheMikeKaisen/Go_Chat/internal/user"
	"github.com/TheMikeKaisen/Go_Chat/internal/ws"
	"github.com/gin-gonic/gin"
)

var r *gin.Engine

func InitRouter(userHandler *user.Handler, ws *ws.Handler) {
	r = gin.Default() // creates the router with default settings

	r.POST("/signup", userHandler.CreateUser)
	r.POST("/login", userHandler.LoginUser)
	r.GET("/logout", userHandler.LogoutUser)

	// websocket route
	r.POST("/ws/createRoom", ws.CreateRoom)
}

func Start(addr string) error {
	return r.Run(addr)
}
