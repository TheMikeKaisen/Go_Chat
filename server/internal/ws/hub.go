package ws

type Room struct {
	ID      string             `json:"id"`
	Name    string             `json:"name"`
	Clients map[string]*Client `json:"clients"` // the number of people who are in the room
}

type Hub struct {
	Rooms map[string]*Room // total number of rooms in hub
}

func NewHub() *Hub {
	return &Hub{
		Rooms: make(map[string]*Room), // initialize an empty map.
	}
}

