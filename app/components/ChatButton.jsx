import React from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const ChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-10 right-10 p-5 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 focus:outline-none z-50"
    >
      <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-white" />{" "}
    </button>
  );
};

export default ChatButton;
