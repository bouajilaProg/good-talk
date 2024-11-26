
import React, { useState } from "react";

interface MessagesFormProps {
  addMessage: (message: { sender: string; body: string }) => void;
}

interface message {
  sender: string;
  body: string;
}
function MessagesForm({ addMessage }: MessagesFormProps) {

  const [message, setMessage] = useState<message>({});



  return (
    <form className="flex items-center p-4 bg-gray-800 border-t border-gray-700">
      <input
        type="text"
        value={message.body}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 bg-gray-700 text-gray-100 rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        onClick={(e) => { addMessage({ sender: "You", body: "Hello! This is a chat bubble." }); e.preventDefault(); }}
        className="px-4 py-2 bg-gray-600 text-gray-100 font-semibold rounded-r-lg hover:bg-gray-500"
      >
        Send
      </button>
    </form>
  );
}

export default MessagesForm;
