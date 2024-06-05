import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';

function Chat() {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = ['User1', 'User2', 'User3'];
  const messages = [
    { from: 'User1', content: 'Hello!' },
    { from: 'me', content: 'Hi there!' },
  ];

  return (
    <div className='flex p-4 justify-center h-screen bg-gray-100'>
      <div className=' w-[80%] bg-white rounded-lg shadow-lg overflow-hidden flex'>
        <div className='w-1/4 bg-blue-100 p-4 border-r border-gray-300'>
          <h2 className='text-xl font-semibold mb-4 text-center'>Users</h2>
          <ul>
            {users.map((user, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer hover:bg-blue-200 rounded mb-2 ${
                  selectedUser === user ? 'bg-blue-300' : ''
                }`}
                onClick={() => setSelectedUser(user)}
              >
                {user}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Box */}
        <div className='w-3/4 p-4 flex flex-col'>
          <div className='flex-1 overflow-y-auto  bg-gray-50 rounded-lg'>
            {selectedUser ? (
              <>
                <div className='w-full h-12 bg-navy text-white flex items-center'>
                  <p className='ml-4'>To:John</p>
                </div>
                <div className='m-4'>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-2 p-2 rounded-lg max-w-xs ${
                        message.from === 'me'
                          ? 'bg-blue-200 self-end ml-auto'
                          : 'bg-gray-200'
                      }`}
                    >
                      {message.content}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className='text-gray-500 text-center'>
                Select a user to start chatting
              </p>
            )}
          </div>
          {selectedUser && (
           <div className="mt-4 relative">
           <input
             type="text"
             placeholder="Type your message..."
             className="w-full p-2 border rounded-lg pr-10"
           />
           <button className="absolute right-2 top-2 text-blue-500">
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
