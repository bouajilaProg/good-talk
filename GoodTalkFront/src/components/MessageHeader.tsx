import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface MessagesHeaderProps {
  Reciever: string;
}

function MessagesHeader({ Reciever }: MessagesHeaderProps) {
  return (
    <header className="flex items-center gap-5  p-4 border-b border-gray-700 bg-gray-800">
      <Link
        to={"/friends"}
        className="text-gray-400 hover:text-gray-200"
      >
        <FaArrowLeft size={20} />
      </Link>
      <h2 className="text-lg font-semibold text-gray-200 ">{Reciever}</h2>
    </header>
  );
}

export default MessagesHeader;
