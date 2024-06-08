import { Avatar } from "flowbite-react";
import React, { useEffect } from "react";
import useConversation from "../../zustand/userConversation";

function User({ data,isonline }) {
  const { _id, firstName, lastName } = data;
  const { selectedConversation, setSelectedConversation } = useConversation();
  const handleSelectedUser = () => {
    setSelectedConversation(data);

  };



  const isSelected = selectedConversation?._id === _id;
  // console.log(isSelected);
  return (
    <div
      className="shadow-lg flex p-2 items-center gap-4 border cursor-pointer "
      onClick={handleSelectedUser}
    >
      {isonline ? "online":""}
      <Avatar rounded></Avatar>
      <p className="">
        {firstName} {lastName}{" "}
      </p>
    </div>
  );
}

export default User;
