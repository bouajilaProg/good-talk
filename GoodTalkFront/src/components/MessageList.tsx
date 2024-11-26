function MessagesList() {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800 w-full">
      <div className="max-w-sm p-4 bg-gray-700 text-gray-100 rounded-lg">
        <h4 className="text-sm font-medium text-gray-300">Sender Name</h4>
        <p className="mt-1">Hello! This is a chat bubble.</p>
      </div>
      <div className="self-end max-w-sm p-4 bg-gray-600 text-gray-100 rounded-lg">
        <h4 className="text-sm font-medium text-gray-300">You</h4>
        <p className="mt-1">Hi there! How are you?</p>
      </div>
    </div>
  );
}

export default MessagesList;

