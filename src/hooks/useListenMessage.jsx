import React, { useEffect } from "react";
import { useSocketContext } from "../context/socket";
import useConversation from "../zustand/userConversation";
import { getSocket } from "../context/socketEvent";

function useListenMessage() {
  // const {socket} = useSocketContext()
  const { messages, setMessages } = useConversation();

  const socket = getSocket();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      console.log(newMessage);
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
}

export default useListenMessage;
