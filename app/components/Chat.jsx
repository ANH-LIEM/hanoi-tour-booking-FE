import React, { useState, useContext } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { ChatContext } from "../context/ChartContext";
import { UserContext } from "../context/UserContext";
import AvatarChatComponent from "./AvatarChat";

const ChatComponent = () => {
  const [message, setMessage] = useState("");

  const { messages, sendMessage } = useContext(ChatContext);

  const { user } = useContext(UserContext);

  const handleSendMessage = () => {
    sendMessage(`${user.name}: ${message}`);
    setMessage("");
  };

  return (
    <div className="fixed bottom-28 right-10 bg-gray-100 rounded-lg shadow-xl p-4 w-96 z-40">
      <div className="overflow-y-auto h-[30rem] mb-4">
        {messages.map((msg, index) => {
          const senderName = msg.split(":")[0].trim();
          const senderMessage = msg.split(":")[1].trim();
          const isCurrentUser = senderName === user.name;

          return (
            <div
              key={index}
              className={`flex ${isCurrentUser ? "justify-end" : ""}`}
            >
              {!isCurrentUser && (
                <AvatarChatComponent
                  user={{ name: senderName, avatarUrl: "" }}
                  avatarSize="6"
                />
              )}
              <p
                className={`max-w-xs px-4 py-2 my-1 rounded-lg ${
                  isCurrentUser ? "bg-blue-200" : "bg-gray-200"
                }`}
              >
                {senderMessage}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => {
            e.preventDefault();
            setMessage(e.target.value);
          }}
          type="text"
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
        >
          <PaperAirplaneIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
