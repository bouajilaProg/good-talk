import { useState } from "react"
import MessagesForm from "../components/MessageForm"
import MessagesHeader from "../components/MessageHeader"
import MessagesList from "../components/MessageList"

function Messages() {

  const [messages, setMessages] = useState([
    { id: 1, sender: "Friend's Name", body: "Hello! This is a chat bubble." },
    { id: 2, sender: "You", body: "Hi there! How are you?" },
  ])

  function addMessage(message: { sender: string, body: string }) {

    setMessages((prevMessages) => {
      return [...prevMessages, { id: prevMessages.length + 1, ...message }]
    })

  }

  return (
    <main className="min-h-screen bg-gray-800 flex-col flex justify-evenly">
      <MessagesHeader />
      <MessagesList />
      <MessagesForm addMessage={addMessage} />
    </main>

  )
}

export default Messages
