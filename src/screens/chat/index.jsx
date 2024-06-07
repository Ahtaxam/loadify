import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import useConversation from "../../zustand/userConversation";
import {
  useGetMessagesQuery,
  useGetUserChatsQuery,
  useSendMessageMutation,
} from "../../redux/api/chatApi";
import ChatUsers from "./chatUsers";
import Messages from "./messages";

function Chat() {
  const {
    selectedConversation,
    setSelectedConversation,
    messages,
    setMessages,
  } = useConversation();
  const [userMessage, setUserMessage] = useState("");
  const [sendMessage, { isLoading }] = useSendMessageMutation();

 
 

  const handleSendMessage = async () => {
    if (userMessage === "") return;
    try {
      const data = await sendMessage({
        data: userMessage,
        id: selectedConversation._id,
      }).unwrap();
      setMessages([...messages, data]);
      setUserMessage("");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex p-4 justify-center h-screen bg-gray-100">
      <div className=" w-[90%] bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="w-1/4 p-2 border-r border-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-center">Users</h2>
          <ChatUsers />
        </div>

        {/* Chat Box */}
        <div className="w-3/4 p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto  bg-gray-50 rounded-lg">
            {selectedConversation ? (
              <>
                <div className="w-full h-12 bg-navy text-white flex items-center">
                  <p className="ml-4">
                    To: {selectedConversation.firstName}{" "}
                    {selectedConversation.lastName}
                  </p>
                </div>
                <div className="m-4">
                  {/* {messagess.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-2 p-2 rounded-lg max-w-xs ${
                        message.from === "me"
                          ? "bg-blue-200 self-end ml-auto"
                          : "bg-gray-200"
                      }`}
                    >
                      {message.content}
                    </div>
                  ))} */}
                  <Messages/>
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-center">
                Select a user to start chatting
              </p>
            )}
          </div>
          {selectedConversation && (
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 border rounded-lg pr-10"
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button
                className="absolute right-2 top-2 text-blue-500"
                onClick={handleSendMessage}
              >
                <IoSend size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
