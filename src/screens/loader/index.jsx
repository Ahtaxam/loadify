import React from "react";
import Header from "../../components/header";
import AddsScreenHeader from "../../components/addScreenHeader";
import { INVENTORYADD, INVENTORYOPTIONS } from "../../utils/data";
import InventoryCard from "../../components/inventoryCard";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/path";
import Typography from '../../components/typography';

function TruckLoader() {
  const navigate = useNavigate();
  const handleInventoryDetail = (id) => {
    navigate(`${PATH.SHOWINVENTORYDETAIL}/${2}`);
  };
  return (
    <div>
      <AddsScreenHeader />
      <Typography className="m-4">All Inventories</Typography>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center py-4 px-2">
        {INVENTORYADD.map((obj, i) => (
          <InventoryCard data={obj} key={i} onClick={handleInventoryDetail} />
        ))}
      </div>
    </div>
  );
}

export default TruckLoader;
