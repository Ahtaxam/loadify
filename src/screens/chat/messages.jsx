import React, { useEffect, useRef } from "react";
import useGetMesseges from "../../hooks/getMesseges";
import MessagesSkeleton from "../../shimmer/message";
import Message from "./message";
import useListenMessage from "../../hooks/useListenMessage";

function Messages() {
  const { messages, loading } = useGetMesseges();
  const scrollRef = useRef(null);
  useListenMessage();

  useEffect(() => {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div
      className="p-4 bg-gray-50 h-full rounded-lg overflow-y-auto"
      ref={scrollRef}
    >
      {loading ? (
        <MessagesSkeleton />
      ) : (
        messages?.map((message, i) => (
          <div key={i}>
            <Message obj={message} />
          </div>
        ))
      )}
    </div>
  );
}

export default Messages;
