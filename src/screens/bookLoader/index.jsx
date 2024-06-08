import React from "react";
import { getToken } from "../../utils/currentUser";
import {
  useGetPersonalAddsQuery,
  useShippInventoryMutation,
} from "../../redux/api/inventoryAdd";
import Inventory from "./inventory";
import SpinnerComponent from "../../components/spinner";
import { toast } from "react-toastify";

function Inventories({ closeModal }) {
  const token = getToken();
  const { data, isLoading } = useGetPersonalAddsQuery(token);
  const [shipInventory, { isLoading: loading }] = useShippInventoryMutation();

  const handleBookInventory = async (id) => {
    try {
      const { message } = await shipInventory({
        inventoryId: id,
      }).unwrap();

      toast.success(message);
      closeModal();
    } catch (error) {
      toast.error("Server ERROR");
    }
  };

  return (
    <div>
      {isLoading ? (
        <SpinnerComponent />
      ) : data?.data?.length === 0 ? (
        <p className="text-gray-500 text-center m-4">
          You have no Inventory to Ship
        </p>
      ) : (
        data?.data?.map((obj, i) => (
          <Inventory
            data={obj}
            key={i}
            index={i}
            length={data?.data.length}
            handleBookInventory={handleBookInventory}
          />
        ))
      )}
    </div>
  );
}

export default Inventories;
