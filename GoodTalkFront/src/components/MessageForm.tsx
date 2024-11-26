import { useState } from "react";

interface MessagesFormProps {
  sendNewMessage: (message: string) => void;
}

function MessagesForm({ sendNewMessage }: MessagesFormProps) {
  const [message, setMessage] = useState("");

  return (
    <form className="flex items-center p-4 bg-gray-800 border-t border-gray-700">
      <input
        type="text"
        value={message}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 bg-gray-700 text-gray-100 rounded-l-lg focus:outline-none"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          sendNewMessage(message);
          console.log(message);
        }}
        className="px-4 py-2 bg-gray-600 text-gray-100 font-semibold rounded-r-lg hover:bg-gray-500"
      >
        Send
      </button>
    </form>
  );
}

export default MessagesForm;
