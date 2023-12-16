"use client";
import React, { useState } from "react";
import Navbar from "../../Navbar";
import Detail from "./Detail";
import EditButton from "./EditButton";
import Link from "next/link";
import ChatButton from "@/app/components/ChatButton";
import ChatBoxComponent from "@/app/components/ChatBox";

const TourDetail = ({ params }) => {
  const [showChat, setShowChat] = useState(false);
  const [chatMode, setChatMode] = useState(null);

  const handleChatWithAdmin = () => {
    setChatMode("admin");
    setShowChat(true);
  };

  const handleDiscussion = () => {
    setChatMode("discussion");
    setShowChat(true);
  };

  const handleToggleChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <Navbar />
      <Detail id={params.id} />
      <Link href={`/tour/edit/${params.id}`}>
        <EditButton />
      </Link>
      <div>
        <ChatButton
          onChatWithAdmin={handleChatWithAdmin}
          onDiscussion={handleDiscussion}
          onToggleChat={handleToggleChat}
        />
        {showChat && <ChatBoxComponent chatMode={chatMode} />}
      </div>
    </>
  );
};

export default TourDetail;
