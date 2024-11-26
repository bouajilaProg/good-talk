import { Link } from "react-router-dom";

function FriendItem() {
  return (
    <Link
      to="/messages/5"
      className="flex items-center bg-gray-900 text-gray-100 rounded-lg p-4 shadow-lg"
    >
      <img
        className="w-16 h-16 rounded-full border-2 border-gray-700"
        src="https://via.placeholder.com/150"
        alt="profile"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">Friend Name</h3>
        <p className="text-gray-400 text-sm">Friend Description</p>
      </div>
    </Link>
  );
}

export default FriendItem;
