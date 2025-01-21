package ws

type Room struct {
	ID      string             `json:"id"`
	Name    string             `json:"name"`
	Clients map[string]*Client `json:"clients"` // the number of people who are in the room
}

type Hub struct {
	Rooms      map[string]*Room // total number of rooms in hub
	Register   chan *Client     // to register when a new client joins the room
	Unregister chan *Client     // to know the information of the client who left the room
	Broadcast  chan *Message    // to broadcast messages to all people in the room
}

func NewHub() *Hub {
	return &Hub{
		Rooms:      make(map[string]*Room), // initialize an empty map.
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Broadcast:  make(chan *Message, 5),
	}
}

func (h *Hub) Run() {
	for {
		select {
		case cl := <-h.Register:

			// check if room with RoomId exists
			if _, ok := h.Rooms[cl.RoomId]; ok {

				// extract the room
				r := h.Rooms[cl.RoomId]

				// checking if client already exists in room
				if _, ok := r.Clients[cl.ID]; !ok {
					r.Clients[cl.ID] = cl
				}
			}
		case cl := <-h.Unregister:
			// check if room with RoomId exists
			if _, ok := h.Rooms[cl.RoomId]; ok {

				// check if the client exists in the room
				if _, ok := h.Rooms[cl.RoomId].Clients[cl.ID]; ok {

					// let everyone know with a broadcast message that user has left the chat
					if len(h.Rooms[cl.RoomId].Clients) != 0 {
						h.Broadcast <- &Message{
							Content:  "User has left the chat",
							RoomID:   cl.RoomId,
							Username: cl.Username,
						}
					}
					// delete the user
					delete(h.Rooms[cl.RoomId].Clients, cl.ID)
					close(cl.Message)
				}
			}
		case m := <-h.Broadcast:
			if _, ok := h.Rooms[m.RoomID]; ok {
				for _, cl := range h.Rooms[m.RoomID].Clients {
					cl.Message <- m
				}
			}
		}
	}
}
