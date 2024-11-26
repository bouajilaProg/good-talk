import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { on } from "events";

interface t_message {
  id: number;
  sender: string;
  body: string;
}

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function getRoomName(user1: string, user2: string) {
  return user1 < user2
    ? `${user1.toLowerCase()}-${user2.toLowerCase()}`.trim()
    : `${user2.toLowerCase()}-${user1.toLowerCase()}`.trim();
}

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join", (message) => {
    console.log("join: ", message);
    socket.join(getRoomName(message.sender, message.reciever));
  });

  socket.on("message", (message) => {
    console.log("message: ", message);
    console.log("room: ", getRoomName(message.sender, message.reciever));

    socket.join(getRoomName(message.sender, message.reciever));

    io.to(getRoomName(message.sender, message.reciever)).emit(
      "message",
      { id: 5, sender: message.sender, body: message.body },
    );
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
