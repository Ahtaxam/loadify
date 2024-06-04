import React from "react";
import ImageCarousel from "./imageCarousel";
import Button from "./button";
import { useNavigate, useParams } from "react-router-dom";
import {
  inventoryAddApi,
  useDeleteInventoryMutation,
  useGetSingleInventoryQuery,
} from "../redux/api/inventoryAdd";
import SpinnerComponent from "./spinner";
import { getCurrentUser, getUserRole } from "../utils/currentUser";
import NavbarComponent from "./navbar";
import { toast } from "react-toastify";
import { PATH } from "../utils/path";
import { useDispatch } from "react-redux";

function InventoryDetail() {
  const { id } = useParams();
  const user = getCurrentUser();
  const role = getUserRole();
  const { data, isLoading } = useGetSingleInventoryQuery(id);
  const [deleteInventory, { isLoading: loading }] =
    useDeleteInventoryMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    postedBy = "",
    _id = "",
    inventoryType = "",
    inventorySize = "",
    inventoryWeight = 0,
    ownerName = "",
    phoneNumber = "",
    location = "",
    countryName = "",
    stateName = "",
    city = "",
    inventoryPicture = [],
  } = data?.data || {};

  const handleDeleteInventory = async () => {
    try {
      const { message } = await deleteInventory(id).unwrap();
      toast.success(message);
      navigate(PATH.MYADDS);
      dispatch(inventoryAddApi.util.invalidateTags(["Inventory"]));
    } catch (error) {
      console.log(error);
      toast.error("SERVER ERROR");
    }
  };

  return (
    <>
      <NavbarComponent />
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="shadow-xl w-[80%] mx-auto p-4 mt-8">
          <p className="text-center text-xl font-bold">Inventory Detail</p>
          <div className="flex justify-end">
            {postedBy !== user._id ? (
              <Button className="bg-navy w-[100px] hover:bg-[hsl(0,100%,4%)] hover:text-white ">
                Chat
              </Button>
            ) : (
              <Button
                className="bg-red-500 w-[100px] "
                onClick={handleDeleteInventory}
              >
                {loading ? "Deleting..." : "Delete"}
              </Button>
            )}
          </div>
          <div className="flex justify-between flex-wrap p-4">
            <p>
              <span className="font-bold">Type: </span> {inventoryType}
            </p>
            <p>
              <span className="font-bold">Size: </span> {inventorySize}
            </p>
            <p>
              <span className="font-bold">Weight: </span> {inventoryWeight}
            </p>
          </div>

          <div className="flex justify-between flex-wrap p-4">
            <p>
              <span className="font-bold">Owner Name: </span> {ownerName}
            </p>
            <p>
              <span className="font-bold">Phone Number: </span> {phoneNumber}
            </p>
          </div>
          <p className="p-4">
            <span className="font-bold">Location: </span>
            {location}
          </p>

          <div className="flex justify-between flex-wrap p-4">
            <p>
              <span className="font-bold">Country: </span> {countryName}
            </p>
            <p>
              <span className="font-bold">State: </span> {stateName}
            </p>
            <p>
              <span className="font-bold">City: </span> {city}
            </p>
          </div>
          <p className="p-4 font-bold">Inventory Images</p>
          <ImageCarousel data={inventoryPicture} />
        </div>
      )}
    </>
  );
}

export default InventoryDetail;
