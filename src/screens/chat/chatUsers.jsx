import React, { useEffect } from "react";
import { useGetUserChatsQuery } from "../../redux/api/chatApi";
import User from "./user";
import { useLocation } from "react-router-dom";
import SpinnerComponent from "../../components/spinner";
import useConversation from "../../zustand/userConversation";
import { useSocketContext } from "../../context/socket";

function ChatUsers() {
  const { data, refetch, isLoading } = useGetUserChatsQuery();
  const { selectedConversation } = useConversation();
  const history = useLocation();

  useEffect(() => {
    refetch();
  }, [history, refetch]);
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(selectedConversation?._id);
  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        data?.map((obj, i) => <User data={obj} key={i} isOnline={isOnline} />)
      )}
    </div>
  );
}

export default ChatUsers;
