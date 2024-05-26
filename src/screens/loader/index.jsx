import React from "react";
import Header from "../../components/header";
import AddsScreenHeader from "../../components/addScreenHeader";
import { INVENTORYADD, INVENTORYOPTIONS } from "../../utils/data";
import InventoryCard from "../../components/inventoryCard";
import { useNavigate } from "react-router-dom";

function TruckLoader() {
  const navigate = useNavigate();
  const handleInventoryDetail = (id) => {
    navigate(`/inventory/detail/${2}`);
  };
  return (
    <div>
      <AddsScreenHeader />
      <p className="text-center m-4 text-2xl">All Inventories</p>
      <div className="grid grid-cols-2 gap-4 justify-items-center py-4">
        {INVENTORYADD.map((obj, i) => (
          <InventoryCard data={obj} key={i} onClick={handleInventoryDetail} />
        ))}
      </div>
    </div>
  );
}

export default TruckLoader;
