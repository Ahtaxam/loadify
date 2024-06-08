import React, { useEffect } from "react";
import { useSocketContext } from "../context/socket";
import useConversation from "../zustand/userConversation";

function useListenMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
}

export default useListenMessage;
