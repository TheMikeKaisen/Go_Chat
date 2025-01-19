package user

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	Service
}

func NewHandler(s Service) *Handler {
	return &Handler{
		Service: s,
	}
}

func (h *Handler) CreateUser(c *gin.Context) {

	var u CreateUserRequest
	err := c.ShouldBindJSON(&u)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	res, err := h.Service.CreateUser(c.Request.Context(), &u)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// debug
	log.Print("result: ", res)
	c.JSON(http.StatusOK, res)
}

func (h *Handler) LoginUser(c *gin.Context) {

	// bind json into struct
	var u LoginUserRequest
	err := c.ShouldBindJSON(&u)
	if err != nil {
		log.Println("Error while binding json request: ")
		c.JSON(http.StatusBadRequest, gin.H{"message": "Error while binding json!"})
		return
	}

	res, err := h.Service.Login(c.Request.Context(), &u)
	if err != nil {
		log.Print("Error while logging in: ", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.SetCookie("jwt", res.AccessToken, 60*60*24, "/", "localhost", false, true)
	c.JSON(http.StatusOK, res)

}

func (h *Handler) LogoutUser(c *gin.Context) {
	c.SetCookie("jwt", "", -1, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "logout successful"})
}
