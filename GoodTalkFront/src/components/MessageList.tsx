import t_message from "../types/t_message";

interface MessageListProps {
  user: string;
  messages: t_message[];
}

function MessagesList({ user, messages }: MessageListProps) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800 w-full max-h-[80vh]">
      {messages.map((message: t_message, index) => (
        <div
          key={index}
          className={`max-w-sm p-4 w-1/2 md:w-1/4 rounded-lg ${
            message.body.startsWith("toxic:")
              ? "bg-red-900 text-white "
              : " bg-gray-700 text-gray-100"
          }
          ${message.sender === user ? "self-end " : ""}
          
             `}
        >
          <h4 className="text-sm font-medium text-gray-300">
            {message.sender === user ? "You" : message.sender}
          </h4>
          <p className="mt-1">
            {message.body.startsWith("toxic:")
              ? message.body.slice(6)
              : message.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MessagesList;
