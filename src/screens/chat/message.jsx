import React from "react";
import { getCurrentUser } from "../../utils/currentUser";
import moment from "moment";

function Message({ obj }) {
  const user = getCurrentUser();
  const { message, senderId, createdAt } = obj;

  const isSentByCurrentUser = senderId === user._id;
  const formattedTime = moment(createdAt).format("hh:mm A");
 


  return (
    <div
      className={`flex mb-2 ${
        isSentByCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
            isSentByCurrentUser
              ? "bg-green-200 text-right"
              : "bg-gray-200 text-left"
          }`}
        >
          <p>{message}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1">{formattedTime}</p>
      </div>
    </div>
  );
}

export default Message;
