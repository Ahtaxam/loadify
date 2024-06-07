import React from "react";
import useGetMesseges from "../../hooks/getMesseges";
import MessagesSkeleton from "../../shimmer/message";
import Message from "./message";

function Messages() {
  const { messages, loading } = useGetMesseges();
  console.log(messages);
  return (
    <div className="p-4 bg-gray-50 h-full rounded-lg overflow-y-auto">
      {loading ? (
        <MessagesSkeleton />
      ) : (
        messages?.map((message, i) => (
          <Message
            obj={message}
            key={i}
            isSentByCurrentUser={message.from === "me"}
          />
        ))
      )}
    </div>
  );
}

export default Messages;
