package user

import (
	"context"
	"log"
	"strconv"
	"time"

	"github.com/TheMikeKaisen/Go_Chat/utils"
	"github.com/golang-jwt/jwt/v4"
)

const (
	secretKey = "secret"
)

type service struct {
	Repository
	timeout time.Duration
}

type MyJwtClaims struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func NewService(repository Repository) Service {
	return &service{
		repository,
		time.Duration(2) * time.Second, // 2 second is written like this in golang
	}
}

func (s *service) CreateUser(c context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
	ctx, cancel := context.WithTimeout(c, s.timeout)
	defer cancel()

	// hash password
	hashedPassword, err := utils.HashPassword(req.Password)
	if err != nil {
		return nil, err
	}

	// create user
	u := &User{
		Username: req.Username,
		Email:    req.Email,
		Password: hashedPassword,
	}

	r, err := s.Repository.CreateUser(ctx, u)
	if err != nil {
		return nil, err
	}

	//debug
	log.Print(r)

	res := &CreateUserResponse{
		ID:       strconv.Itoa(int(r.ID)),
		Username: r.Username,
		Email:    r.Email,
	}

	//debug
	log.Print(res)

	return res, nil

}

func (s *service) Login(c context.Context, user *LoginUserRequest) (*LoginUserResponse, error) {
	ctx, cancel := context.WithTimeout(c, s.timeout)
	defer cancel()

	// get user by email from db
	u, err := s.Repository.GetUserByEmail(ctx, user.Email)
	if err != nil {
		log.Print("error while getting email:")
		return &LoginUserResponse{}, err
	}

	//debug
	log.Print("request password: ", user.Password)
	log.Print("hashed password: ", u.Password)

	// check if password is correct
	err = utils.CheckPassword(user.Password, u.Password)
	if err != nil {
		log.Print("Error: ", err)
		return &LoginUserResponse{}, err
	}

	// create token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, MyJwtClaims{
		ID:       strconv.Itoa(int(u.ID)),
		Username: u.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    strconv.Itoa(int(u.ID)),
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
		},
	})

	// sign the token
	at, err := token.SignedString([]byte(secretKey)) // this returns an access token!
	if err != nil {
		log.Print("Error while signing the token")
		return &LoginUserResponse{}, err
	}

	return &LoginUserResponse{AccessToken: at, ID: u.ID, Username: u.Username}, nil

}
