import { Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../utils/path";
// import {Image} from "flowbite-react";

function TruckAddCard({ data }) {
  const { vehiclePicture, vehicleName, vehicleType, countryName, city } = data;
  const navigate = useNavigate();
  const handleAddDetail = () => {
    navigate(PATH.LOADERADDS)
  };

  return (
    <div
      className="p-4 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col cursor-pointer"
      onClick={handleAddDetail}
    >
      <img
        src={vehiclePicture}
        className="shadow rounded-lg overflow-hidden border"
      />
      <div className="mt-8">
        <div className="">
          <div className="flex justify-between">
            <p className="font-bold text-xl mb-2">{vehicleName}</p>
            <p className="text-gray-700 text-base mb-2">{vehicleType}</p>
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

export default TruckAddCard;
