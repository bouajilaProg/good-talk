import t_message from "../types/t_message";

interface MessageListProps {
  user: string;
  messages: t_message[];
}

function MessagesList({ user, messages }: MessageListProps) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800 w-full max-h-[80vh]">
      {messages.map((message: t_message, index) => (
        message.sender !== user
          ? (
            <div
              key={index}
              className="max-w-sm p-4 bg-gray-700 text-gray-100 rounded-lg"
            >
              <h4 className="text-sm font-medium text-gray-300">
                {message.sender}
              </h4>
              <p className="mt-1">{message.body}</p>
            </div>
          )
          : (
            <div
              key={index}
              className="self-end max-w-sm p-4 bg-gray-600 text-gray-100 rounded-lg"
            >
              <h4 className="text-sm font-medium text-gray-300">You</h4>
              <p className="mt-1">{message.body}</p>
            </div>
          )
      ))}
    </div>
  );
}

export default MessagesList;
