import React from "react";
import { useGetAllActiveAddsQuery } from "../../../redux/api/inventoryAdd";
import NavbarComponent from "../../../components/navbar";
import LoaderCardSkeleton from "../../../shimmer/loaders";
import InventoryCard from "../../../components/inventoryCard";
import ActiveOrderCard from "../../../components/activeOrderCard";

function ActiveAdds() {
  const { data, isLoading } = useGetAllActiveAddsQuery();
  console.log(data);
  return (
    <>
      <NavbarComponent />

      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center py-4 px-2 flex-wrap">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <LoaderCardSkeleton key={i} />
          ))
        ) : data?.data.length === 0 ? (
          <p className="font-inter text-xl ">
            you have't post any Inventory Add
          </p>
        ) : (
          data?.data?.map((obj, i) => (
            <ActiveOrderCard
              data={obj}
              key={i}
            //   onClick={() => handleInventoryDetail(obj?._id)}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ActiveAdds;
