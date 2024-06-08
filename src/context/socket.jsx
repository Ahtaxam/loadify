import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getCurrentUser } from "../utils/currentUser";

let URL = import.meta.env.VITE_BASE_URL;

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const user = getCurrentUser();

  URL = URL.slice(0, -7);

  useEffect(() => {
    // Check if user is available before creating socket connection
    if (user) {
      const socket = io(URL, {
        query: {
          userId: user?._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Close socket connection when component unmounts or user becomes unavailable
      return () => socket.close();
    } else {
      // Close socket connection if user becomes unavailable
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []); // Only run useEffect when user changes

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
