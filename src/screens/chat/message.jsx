import React from "react";
import { getCurrentUser } from "../../utils/currentUser";

function Message({ obj }) {
    const user = getCurrentUser();
  const { message, senderId } = obj;

  const isSentByCurrentUser = senderId === user._id
  return (
    <div
      className={`flex mb-2 ${
        isSentByCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-lg text-sm ${
          isSentByCurrentUser
            ? "bg-green-200 text-right"
            : "bg-gray-200 text-left"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default Message;
