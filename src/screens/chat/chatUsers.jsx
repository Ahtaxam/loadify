import React from "react";
import { useGetUserChatsQuery } from "../../redux/api/chatApi";
import User from "./user";

function ChatUsers() {
  const { data } = useGetUserChatsQuery();
  return (
    <div className="flex flex-col gap-4">
      {data?.map((obj,i) => (
        <User data={obj} key={i} />
      ))}
    </div>
  );
}

export default ChatUsers;
