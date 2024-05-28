import React from "react";
import Navbar from "../../components/navbar";
import Map from "../../assets/images/map.png";
import { INVENTORYADD, TRUCKADD } from "../../utils/data";
import Footer from "../../components/footer";

import SwiperComponent from "../../components/swiper";
import { useGetAllLoadersQuery } from '../../redux/api/truckadd';
import { useGetAllInventoryQuery } from '../../redux/api/inventoryAdd';

function Home() {
  const {data,isLoading} = useGetAllLoadersQuery();
  const {data:inventoryData} = useGetAllInventoryQuery();
  return (
    <>
      <Navbar />

      {/* map and text container */}

      <div className="flex justify-center p-4 gap-11 flex-wrap">
        <img src={Map} alt="image" className="animate-zoomIn" />
        <div className="flex flex-col items-center justify-center  grow">
          <div className="text-center">
            <p className="text-xl text-[#b48484]">A SMARTER WAY TO LOGISTICS</p>
            <p className="sm:text-4xl text-2xl">
              <span className="text-[#F5DEB3]">
                Your Digital Freight Solution{" "}
              </span>
              <br />
              <span className="text-[#F5DEB3]"> Partner </span>for Over-the-road{" "}
              <br /> <span className="text-center"> Transportation</span>
            </p>
          </div>
        </div>
      </div>

      <SwiperComponent text="Truck Add" type="truck" data={data?.data || []} isLoading={isLoading} />

      <SwiperComponent text="Inventory Add" type="inventory" data={inventoryData?.data||[]} isLoading={isLoading}/>

      <Footer />
    </>
  );
}

export default Home;
