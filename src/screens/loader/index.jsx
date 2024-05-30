import React from "react";
import Header from "../../components/header";
import AddsScreenHeader from "../../components/addScreenHeader";
import { INVENTORYADD, INVENTORYOPTIONS } from "../../utils/data";
import InventoryCard from "../../components/inventoryCard";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/path";
import Typography from '../../components/typography';
import { useGetAllInventoryQuery } from "../../redux/api/inventoryAdd";
import LoaderCardSkeleton from "../../shimmer/loaders";
import NavbarComponent from '../../components/navbar';

function TruckLoader() {
  const {data,isLoading} = useGetAllInventoryQuery();
  const navigate = useNavigate();
  const handleInventoryDetail = (id) => {
    navigate(`${PATH.SHOWINVENTORYDETAIL}/${id}`);
  };
  return (
    <div>
      {/* <AddsScreenHeader /> */}
      <NavbarComponent/>
      <Typography className="m-4">All Inventories</Typography>

      <div className='grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center py-4 px-2 flex-wrap'>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <LoaderCardSkeleton key={i} />
            ))
          : data?.data.map((obj, i) => (
              <InventoryCard data={obj} key={i} onClick={() => handleInventoryDetail(obj?._id)} />
            ))}
      </div>
    </div>
  );
}

export default TruckLoader;
