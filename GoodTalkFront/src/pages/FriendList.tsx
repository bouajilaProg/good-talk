import FriendItem from "../components/FriendItem";

function FriendList() {
  return (
    <main className="flex flex-col bg-gray-800 text-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Friends</h1>
      <div className="flex flex-col space-y-6">
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
    </main>
  );
}

export default FriendList;
