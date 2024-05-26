import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function InventoryAddCard({ data }) {
  const { inventoryPicture, inventorySize,inventoryType, countryName, city } = data;

  return (
    <Link
      className="p-4 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col "
      to="/"
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
    </Link>
  );
}

export default InventoryAddCard;
