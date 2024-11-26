import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
//import axios from "axios";

import { GlobalContext } from "../main";
import MessagesForm from "../components/MessageForm";
import MessagesHeader from "../components/MessageHeader";
import MessagesList from "../components/MessageList";

import t_message from "../types/t_message";

const chatSocket = io("http://localhost:3000");

function Messages() {
  const recieverId = useParams().id;
  if (!recieverId) {
    return <div>Reciever not found</div>;
  }

  useEffect(() => {
    chatSocket.emit("join", { sender: user, reciever: recieverId });
  }, []);

  const user = useContext(GlobalContext).user;

  const [messages, setMessages] = useState<t_message[]>([]);

  function SendMessage(message: string) {
    chatSocket.emit("message", {
      sender: user,
      reciever: recieverId,
      body: message,
    });
  }

  chatSocket.on("message", (message: t_message) => {
    setMessages([...messages, message]);
  });

  // Render
  return (
    <main className="min-h-screen bg-gray-800 flex-col flex justify-evenly">
      <MessagesHeader />
      <MessagesList messages={messages} user={user} />
      <MessagesForm sendNewMessage={SendMessage} />
    </main>
  );
}

export default Messages;
