import { Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/currentUser";
import { PATH } from "../utils/path";
import { toast } from "react-toastify";

function InventoryAddCard({ data }) {
  const { inventoryPicture, inventorySize,inventoryType, countryName, city } = data;
  const navigate = useNavigate();
  const role = getUserRole();
  const handleInventoryAdd = () => {
    console.log("CLICKED: ", role);
    navigate(`${PATH.SHOWINVENTORYDETAIL}/2`)

    // if(role === "Truck Loader"){
    //   navigate(`${PATH.SHOWINVENTORYDETAIL}/2`)
    // }
    // else {
    //   toast.error("You are unAuthorized to View This Add")
    // }
  }

  return (
    <div
      className="p-4 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col cursor-pointer"
      onClick={handleInventoryAdd}
     
    >
      <img
        src={inventoryPicture}
        className="shadow rounded-lg overflow-hidden border"
      />
      <div className="mt-8">
        <div className="">
          <div className="flex justify-between">
            <p className="font-bold text-xl mb-2">{inventoryType}</p>
            <p className="text-gray-700 text-base mb-2">{inventorySize}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700 text-base mb-2"> {countryName}</p>
            <p className="text-gray-700 text-base mb-2">{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryAddCard;
